
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  ScrollView, StyleSheet
} from 'react-native';

const languages = [
  { flag: '🇻🇳', name: 'Vietnamese' },
  { flag: '🇫🇷', name: 'French' },
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇵🇹', name: 'Portuguese' },
  { flag: '🇨🇳', name: 'China' },
  { flag: '🇰🇷', name: 'Korea' },
  { flag: '🇳🇮', name: 'Nicaragua' },
  { flag: '🇷🇺', name: 'Russia' },
];

export default function LanguageScreen({ onBack }: any) {
  const [selected, setSelected] = useState('English');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text onPress={onBack} style={styles.back}>‹</Text>
        <Text style={styles.title}>Language</Text>
      </View>

      <ScrollView>
        {languages.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => setSelected(item.name)}
          >
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.name}>{item.name}</Text>
            {selected === item.name && (
              <Text style={styles.check}>✓</Text>
            )}
          </TouchableOpacity>
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
  row: {
    flexDirection: 'row', alignItems: 'center',
    padding: 15, borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  flag: { fontSize: 20, width: 35 },
  name: { flex: 1, fontSize: 14, color: '#777' },
  check: { color: '#3926B8', fontSize: 18 },
});
