
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const rates = [
  ['Individual customers', '1m', '4.50%'],
  ['Corporate customers', '2m', '5.50%'],
  ['Individual customers', '1m', '4.50%'],
  ['Corporate customers', '6m', '2.50%'],
  ['Individual customers', '1m', '4.50%'],
  ['Corporate customers', '8m', '6.50%'],
  ['Individual customers', '1m', '4.50%'],
  ['Individual customers', '1m', '4.50%'],
  ['Corporate customers', '7m', '6.80%'],
  ['Individual customers', '12m', '5.90%'],
];

export default function InterestRateScreen({ onBack }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text onPress={onBack} style={styles.back}>‹</Text>
        <Text style={styles.title}>Interest rate</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.heading}>Interest kind</Text>
        <Text style={styles.heading}>Deposit</Text>
        <Text style={styles.heading}>Rate</Text>
      </View>

      <ScrollView>
        {rates.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.kind}>{item[0]}</Text>
            <Text style={styles.deposit}>{item[1]}</Text>
            <Text style={styles.rate}>{item[2]}</Text>
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
    flexDirection: 'row', paddingHorizontal: 15,
    paddingVertical: 12, justifyContent: 'space-between',
  },
  heading: { color: '#AAA', fontSize: 12, width: '30%' },
  row: {
    flexDirection: 'row', alignItems: 'center',
    padding: 15, borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  kind: { width: '55%', fontSize: 12, color: '#333' },
  deposit: { width: '20%', fontSize: 12, color: '#333' },
  rate: { width: '25%', fontSize: 12, color: '#3926B8' },
});
