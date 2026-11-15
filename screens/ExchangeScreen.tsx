
import React, { useState, useEffect } from 'react';
import { getExchangeRates } from '../api/exchange';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

type Props = {
  onNavigate: (screen: 'Home' | 'Search' | 'Exchange') => void;
};

export default function ExchangeScreen({ onNavigate }: Props) {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [fromCurrency, setFromCurrency] = useState('KZT');
  const [toCurrency, setToCurrency] = useState('USD');

  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [selecting, setSelecting] = useState<'from' | 'to'>('from');
  const [search, setSearch] = useState('');

  // API арқылы валюта бағамдарын алу
  const loadRates = async () => {
    try {
      setLoading(true);
      setError('');

    const rates = await getExchangeRates();
setRates(rates);

    } catch (e) {
      setError('Unable to load currency rates. Check your internet.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRates();
  }, []);

  // Валютаны есептеу
  useEffect(() => {
    const amount = Number(fromAmount);

    if (
      !fromAmount ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      !rates[fromCurrency] ||
      !rates[toCurrency]
    ) {
      setToAmount('');
      return;
    }

    // API базасы KZT болғандықтан
    const result =
      (amount / rates[fromCurrency]) * rates[toCurrency];

    setToAmount(result.toFixed(2));
  }, [fromAmount, fromCurrency, toCurrency, rates]);

  // Валютаны таңдау
  const openModal = (type: 'from' | 'to') => {
    setSelecting(type);
    setSearch('');
    setModalVisible(true);
  };

  const chooseCurrency = (code: string) => {
    if (selecting === 'from') {
      setFromCurrency(code);
    } else {
      setToCurrency(code);
    }

    setModalVisible(false);
  };

  // Валюталарды ауыстыру
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Валюта атаулары
  const getCurrencyName = (code: string) => {
    const names: Record<string, string> = {
      KZT: 'Kazakhstani Tenge',
      USD: 'US Dollar',
      EUR: 'Euro',
      GBP: 'British Pound',
      RUB: 'Russian Ruble',
      CNY: 'Chinese Yuan',
      KRW: 'South Korean Won',
      JPY: 'Japanese Yen',
      TRY: 'Turkish Lira',
      AED: 'UAE Dirham',
      KGS: 'Kyrgyz Som',
      UZS: 'Uzbek Som',
    };

    return names[code] || code;
  };

  const exchangeRate =
    rates[fromCurrency] && rates[toCurrency]
      ? rates[toCurrency] / rates[fromCurrency]
      : 0;

  const exchange = () => {
    if (!fromAmount || Number(fromAmount) <= 0 || !toAmount) {
      Alert.alert('Attention', 'Please enter a valid amount');
      return;
    }

    Alert.alert(
      'Exchange calculation',
      `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`
    );
  };

  const currencies = Object.keys(rates)
    .filter(code =>
      code.toLowerCase().includes(search.toLowerCase()) ||
      getCurrencyName(code).toLowerCase().includes(search.toLowerCase())
    )
    .sort();

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate('Home')}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Exchange</Text>

        <TouchableOpacity onPress={loadRates}>
          <Text style={styles.refresh}>↻</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Illustration */}
        <View style={styles.illustration}>
          <Text style={styles.moneyIcon}>💱</Text>
          <Text style={styles.illustrationTitle}>
            Currency Exchange
          </Text>
          <Text style={styles.illustrationText}>
            Exchange currencies easily
          </Text>
        </View>

        {/* Loading */}
        {loading && (
          <View style={styles.status}>
            <ActivityIndicator size="large" color="#3529C5" />
            <Text style={styles.statusText}>
              Loading exchange rates...
            </Text>
          </View>
        )}

        {/* Error */}
        {!loading && error !== '' && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>

            <TouchableOpacity
              style={styles.retryButton}
              onPress={loadRates}
            >
              <Text style={styles.retryText}>Try again</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Exchange Card */}
        {!loading && !error && (
          <View style={styles.card}>

            <Text style={styles.label}>From</Text>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.amountInput}
                placeholder="Enter amount"
                placeholderTextColor="#BBBBBB"
                keyboardType="decimal-pad"
                value={fromAmount}
                onChangeText={setFromAmount}
              />

              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.currencyButton}
                onPress={() => openModal('from')}
              >
                <Text style={styles.currencyText}>
                  {fromCurrency}
                </Text>
                <Text style={styles.arrow}>⌄</Text>
              </TouchableOpacity>
            </View>

            {/* Swap */}
            <TouchableOpacity
              style={styles.swapButton}
              onPress={swapCurrencies}
            >
              <Text style={styles.swapText}>↓↑</Text>
            </TouchableOpacity>

            <Text style={styles.label}>To</Text>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.amountInput}
                placeholder="Converted amount"
                placeholderTextColor="#BBBBBB"
                value={toAmount}
                editable={false}
              />

              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.currencyButton}
                onPress={() => openModal('to')}
              >
                <Text style={styles.currencyText}>
                  {toCurrency}
                </Text>
                <Text style={styles.arrow}>⌄</Text>
              </TouchableOpacity>
            </View>

            {/* Rate */}
            <View style={styles.rateContainer}>
              <Text style={styles.rateTitle}>
                Currency rate
              </Text>

              <Text style={styles.rateText}>
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </Text>
            </View>

            <Text style={styles.updatedText}>
              Live rates from ExchangeRate-API
            </Text>

            <TouchableOpacity
              style={styles.exchangeButton}
              onPress={exchange}
            >
              <Text style={styles.exchangeText}>
                Calculate
              </Text>
            </TouchableOpacity>

          </View>
        )}
      </ScrollView>

      {/* Currency selection modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modal}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Select currency
              </Text>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.searchInput}
              placeholder="Search currency..."
              value={search}
              onChangeText={setSearch}
            />

            <ScrollView style={{ maxHeight: 400 }}>
              {currencies.map(code => {
                const selected =
                  selecting === 'from'
                    ? fromCurrency === code
                    : toCurrency === code;

                return (
                  <TouchableOpacity
                    key={code}
                    style={styles.currencyOption}
                    onPress={() => chooseCurrency(code)}
                  >
                    <View>
                      <Text style={styles.optionText}>
                        {code}
                      </Text>

                      <Text style={styles.optionSubtitle}>
                        {getCurrencyName(code)}
                      </Text>
                    </View>

                    {selected && (
                      <Text style={styles.check}>✓</Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backArrow: {
    fontSize: 32,
    color: '#333333',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333333',
  },
  refresh: {
    fontSize: 27,
    color: '#3529C5',
  },
  illustration: {
    height: 180,
    margin: 20,
    backgroundColor: '#EEEDFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moneyIcon: {
    fontSize: 55,
  },
  illustrationTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3529C5',
    marginTop: 8,
  },
  illustrationText: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 4,
  },
  label: {
    fontSize: 13,
    color: '#999999',
    marginBottom: 9,
  },
  inputBox: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#333333',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#DDDDDD',
  },
  currencyButton: {
    width: 90,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3529C5',
  },
  arrow: {
    fontSize: 19,
    color: '#999999',
  },
  swapButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapText: {
    fontSize: 28,
    color: '#3529C5',
    fontWeight: 'bold',
  },
  rateContainer: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateTitle: {
    fontSize: 12,
    color: '#3529C5',
  },
  rateText: {
    fontSize: 12,
    color: '#333333',
    fontWeight: 'bold',
  },
  updatedText: {
    fontSize: 11,
    color: '#999999',
    marginTop: 12,
  },
  exchangeButton: {
    height: 50,
    backgroundColor: '#3529C5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  exchangeText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
    marginTop: 30,
  },
  statusText: {
    color: '#777777',
    marginTop: 12,
  },
  errorBox: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    alignItems: 'center',
  },
  errorText: {
    color: '#D33',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#3529C5',
    borderRadius: 10,
  },
  retryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  closeButton: {
    fontSize: 28,
    color: '#888888',
  },
  searchInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  currencyOption: {
    minHeight: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  optionSubtitle: {
    fontSize: 11,
    color: '#999999',
    marginTop: 3,
  },
  check: {
    fontSize: 20,
    color: '#3529C5',
  },
});
