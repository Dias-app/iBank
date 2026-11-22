
import React, { useState } from 'react';
import {
  View, Text, TextInput, ScrollView,
  TouchableOpacity, StyleSheet
} from 'react-native';

const branches = [
  { name: 'Bank 1650 Union Street', distance: '50 m' },
  { name: 'Bank Secaucus', distance: '1.2 km' },
  { name: 'Bank 1657 Riverside Drive', distance: '5.3 km' },
  { name: 'Bank Rutherford', distance: '70 m' },
  { name: 'Bank 1656 Union Street', distance: '30 m' },
];

export default function BranchScreen({ onBack }: any) {
  const [search, setSearch] = useState('');

  const filtered = branches.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Branch</Text>
      </View>

      <View style={styles.map}>
        <Text style={styles.mapText}>🗺️ Map</Text>
        <Text style={styles.pin}>📍</Text>
        <Text style={styles.pin2}>📍</Text>
        <Text style={styles.pin3}>📍</Text>
        <Text style={styles.pin4}>📍</Text>
      </View>

      <View style={styles.list}>
        <TextInput
          style={styles.search}
          placeholder="⌕  Bank"
          value={search}
          onChangeText={setSearch}
        />

        <ScrollView>
          {filtered.map((item, index) => (
            <View style={styles.item} key={index}>
              <Text style={styles.location}>📍</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.distance}>{item.distance}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    height: 60, backgroundColor: '#FFF',
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 20,
  },
  back: { fontSize: 30, marginRight: 20, color: '#333' },
  title: { fontSize: 18, fontWeight: '600' },
  map: {
    flex: 1, backgroundColor: '#E8E8E8',
    justifyContent: 'center', alignItems: 'center',
  },
  mapText: { color: '#999', fontSize: 20 },
  pin: { position: 'absolute', top: 30, left: 40, fontSize: 24 },
  pin2: { position: 'absolute', top: 80, right: 70, fontSize: 24 },
  pin3: { position: 'absolute', bottom: 70, left: 60, fontSize: 24 },
  pin4: { position: 'absolute', bottom: 40, right: 40, fontSize: 24 },
  list: {
    height: '48%', backgroundColor: '#FFF',
    borderTopLeftRadius: 25, borderTopRightRadius: 25,
    padding: 15,
  },
  search: {
    borderWidth: 1, borderColor: '#DDD',
    borderRadius: 12, padding: 10, marginBottom: 10,
  },
  item: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 15, borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  location: { fontSize: 18, marginRight: 10 },
  name: { flex: 1, fontSize: 13, color: '#333' },
  distance: { fontSize: 10, color: '#999' },
});
