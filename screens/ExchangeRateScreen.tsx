
import React from 'react';
import {
  View, Text, ScrollView, StyleSheet
} from 'react-native';

const currencies = [
  { flag: '🇻🇳', name: 'Vietnam', buy: '1.403', sell: '1.746' },
  { flag: '🇳🇮', name: 'Nicaragua', buy: '9.123', sell: '12.09' },
  { flag: '🇰🇷', name: 'Korea', buy: '3.704', sell: '5.151' },
  { flag: '🇷🇺', name: 'Russia', buy: '116.0', sell: '144.4' },
  { flag: '🇨🇳', name: 'China', buy: '1.725', sell: '2.234' },
  { flag: '🇵🇹', name: 'Portuguese', buy: '1.403', sell: '1.746' },
  { flag: '🇰🇷', name: 'Korea', buy: '3.454', sell: '4.312' },
  { flag: '🇫🇷', name: 'French', buy: '23.45', sell: '34.56' },
  { flag: '🇳🇮', name: 'Nicaragua', buy: '263.1', sell: '300.3' },
  { flag: '🇨🇳', name: 'China', buy: '1.725', sell: '2.234' },
];

export default function ExchangeRateScreen({ onBack }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text onPress={onBack} style={styles.back}>‹</Text>
        <Text style={styles.title}>Exchange rate</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.countryTitle}>Country</Text>
        <Text style={styles.heading}>Buy</Text>
        <Text style={styles.heading}>Sell</Text>
      </View>

      <ScrollView>
        {currencies.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.country}>{item.name}</Text>
            <Text style={styles.value}>{item.buy}</Text>
            <Text style={styles.value}>{item.sell}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    height: 60, flexDirection: 'row',
    alignItems: 'center', paddingHorizontal: 20,
  },
  back: { fontSize: 30, marginRight: 20, color: '#333' },
  title: { fontSize: 18, fontWeight: '600' },
  tableHeader: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 15, paddingVertical: 12,
  },
  countryTitle: { flex: 1, color: '#AAA', fontSize: 12 },
  heading: { width: 65, color: '#AAA', fontSize: 12, textAlign: 'center' },
  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 15, paddingVertical: 15,
    borderBottomWidth: 1, borderBottomColor: '#EEE',
  },
  flag: { fontSize: 20, width: 30 },
  country: { flex: 1, fontSize: 13, color: '#333' },
  value: { width: 65, textAlign: 'center', fontSize: 12 },
});
