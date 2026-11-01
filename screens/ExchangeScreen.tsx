import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';

type Props = {
  onNavigate: (screen: 'Home' | 'Search' | 'Exchange') => void;
};

const currencies = [
  { code: 'VND', name: 'Viet Nam Dong', rate: 25400 },
  { code: 'HKS', name: 'Hong Kong Dollar', rate: 7.8 },
  { code: 'USD', name: 'Dollar', rate: 1 },
  { code: 'NT$', name: 'Taiwan Dollar', rate: 32 },
  { code: 'JS', name: 'Jamaica Dollar', rate: 157 },
  { code: 'KRW', name: 'Korean Won', rate: 1380 },
];

export default function ExchangeScreen({ onNavigate }: Props) {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('KRW');

  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [selecting, setSelecting] = useState<'from' | 'to'>('from');

  const getRate = (code: string) => {
    return currencies.find(item => item.code === code)?.rate ?? 1;
  };

  const calculate = (
    amount: string,
    from = fromCurrency,
    to = toCurrency
  ) => {
    if (!amount || isNaN(Number(amount))) {
      setToAmount('');
      return;
    }

    const result = (Number(amount) / getRate(from)) * getRate(to);
    setToAmount(result.toFixed(2));
  };

  const changeAmount = (value: string) => {
    setFromAmount(value);
    calculate(value);
  };

  const openModal = (type: 'from' | 'to') => {
    setSelecting(type);
    setModalVisible(true);
  };

  const chooseCurrency = (code: string) => {
    let newFrom = fromCurrency;
    let newTo = toCurrency;

    if (selecting === 'from') {
      newFrom = code;
      setFromCurrency(code);
    } else {
      newTo = code;
      setToCurrency(code);
    }

    calculate(fromAmount, newFrom, newTo);
    setModalVisible(false);
  };

  const swapCurrencies = () => {
    const newFrom = toCurrency;
    const newTo = fromCurrency;

    setFromCurrency(newFrom);
    setToCurrency(newTo);

    calculate(fromAmount, newFrom, newTo);
  };

  const exchange = () => {
    if (!fromAmount || Number(fromAmount) <= 0) {
      Alert.alert('Attention', 'Please enter an amount');
      return;
    }

    Alert.alert(
      'Exchange successful',
      `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`
    );
  };

  const rateValue = getRate(toCurrency) / getRate(fromCurrency);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate('Home')}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Exchange</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Illustration */}
        <View style={styles.illustration}>
          <View style={styles.phone}>
            <Text style={styles.phoneText}>$</Text>
          </View>

          <Text style={styles.coin1}>🪙</Text>
          <Text style={styles.coin2}>💰</Text>
          <Text style={styles.person1}>🧍</Text>
          <Text style={styles.person2}>🧍</Text>
        </View>

        {/* Exchange Card */}
        <View style={styles.card}>
          <Text style={styles.label}>From</Text>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.amountInput}
              placeholder="Amount"
              placeholderTextColor="#BBBBBB"
              keyboardType="decimal-pad"
              value={fromAmount}
              onChangeText={changeAmount}
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
              placeholder="Amount"
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
            <Text style={styles.rateTitle}>Currency rate</Text>

            <Text style={styles.rateText}>
              1 {fromCurrency} = {rateValue.toFixed(4)} {toCurrency}
            </Text>
          </View>

          {/* Exchange Button */}
          <TouchableOpacity
            style={[
              styles.exchangeButton,
              !fromAmount && styles.disabledButton,
            ]}
            onPress={exchange}
          >
            <Text style={styles.exchangeText}>Exchange</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Currency Modal */}
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
                Select the currency
              </Text>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>

            {currencies.map(item => {
              const selected =
                selecting === 'from'
                  ? fromCurrency === item.code
                  : toCurrency === item.code;

              return (
                <TouchableOpacity
                  key={item.code}
                  style={styles.currencyOption}
                  onPress={() => chooseCurrency(item.code)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected && styles.selectedText,
                    ]}
                  >
                    {item.code} ( {item.name} )
                  </Text>

                  {selected && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backArrow: {
    fontSize: 32,
    color: '#333333',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  illustration: {
    height: 210,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FAFAFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 75,
    height: 125,
    borderWidth: 4,
    borderColor: '#3529C5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  phoneText: {
    fontSize: 40,
    color: '#F5B52E',
    fontWeight: 'bold',
  },
  coin1: {
    position: 'absolute',
    left: 45,
    top: 65,
    fontSize: 30,
  },
  coin2: {
    position: 'absolute',
    right: 45,
    top: 50,
    fontSize: 30,
  },
  person1: {
    position: 'absolute',
    left: 15,
    bottom: 15,
    fontSize: 38,
  },
  person2: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: 38,
  },
  card: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    elevation: 4,
    shadowColor: '#777777',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  label: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 8,
  },
  inputBox: {
    height: 45,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  amountInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#333333',
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: '#DDDDDD',
  },
  currencyButton: {
    width: 75,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 13,
    color: '#555555',
  },
  arrow: {
    fontSize: 18,
    color: '#999999',
  },
  swapButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapText: {
    fontSize: 27,
    color: '#3529C5',
    fontWeight: 'bold',
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 20,
  },
  rateTitle: {
    fontSize: 12,
    color: '#3529C5',
  },
  rateText: {
    fontSize: 11,
    color: '#333333',
  },
  exchangeButton: {
    height: 48,
    backgroundColor: '#3529C5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#EDECF6',
  },
  exchangeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.30)',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    elevation: 10,
  },
  modalHeader: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
  },
  closeButton: {
    position: 'absolute',
    left: 75,
    top: -15,
    fontSize: 25,
    color: '#888888',
  },
  currencyOption: {
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 12,
    color: '#888888',
  },
  selectedText: {
    color: '#3024C4',
    fontWeight: 'bold',
  },
  check: {
    fontSize: 19,
    color: '#3024C4',
    fontWeight: 'bold',
  },
});