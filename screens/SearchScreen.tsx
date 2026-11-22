
import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, ScrollView, Alert,
} from 'react-native';

type Props = {
  onNavigate: (screen: any) => void;
};

export default function SearchScreen({ onNavigate }: Props) {
  const menuItems = [
    {
      title: 'Branch',
      subtitle: 'Find the nearest bank branch',
      icon: '🏦',
      screen: 'Branch',
    },
    {
      title: 'Interest rate',
      subtitle: 'Check current interest rates',
      icon: '📊',
      screen: 'InterestRate',
    },
    {
      title: 'Exchange rate',
      subtitle: 'View currency exchange rates',
      icon: '💱',
      screen: 'ExchangeRate',
    },
    {
      title: 'Language',
      subtitle: 'Choose your language',
      icon: '🌐',
      screen: 'Language',
    },
    {
      title: 'Exchange',
      subtitle: 'Exchange your money',
      icon: '💵',
      screen: 'Exchange',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate('Home')}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          What are you looking for?
        </Text>

        <Text style={styles.description}>
          Choose a service below
        </Text>

        <View style={styles.menu}>
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.title}
              style={styles.menuItem}
              onPress={() => onNavigate(item.screen)}
            >
              <View style={styles.iconBox}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>

              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>
                  {item.title}
                </Text>
                <Text style={styles.menuSubtitle}>
                  {item.subtitle}
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.banner}
          onPress={() => onNavigate('Exchange')}
        >
          <View>
            <Text style={styles.bannerTitle}>
              Currency Exchange
            </Text>
            <Text style={styles.bannerSubtitle}>
              Exchange currencies easily
            </Text>
            <Text style={styles.bannerButton}>
              Exchange now →
            </Text>
          </View>

          <Text style={styles.bannerIcon}>💱</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate('Home')}
        >
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <View style={styles.navItem}>
          <Text style={styles.activeIcon}>⌕</Text>
          <Text style={styles.activeText}>Search</Text>
        </View>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => Alert.alert('Mail', 'No new messages')}
        >
          <Text style={styles.navIcon}>✉</Text>
          <Text style={styles.navText}>Mail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate('Language')}
        >
          <Text style={styles.navIcon}>⚙</Text>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7FB' },
  header: {
    height: 60, backgroundColor: '#FFF',
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 20,
  },
  back: { fontSize: 32, color: '#333', marginRight: 15 },
  headerTitle: { fontSize: 19, fontWeight: 'bold', color: '#333' },
  heading: {
    fontSize: 23, fontWeight: 'bold',
    color: '#292929', marginTop: 25, marginHorizontal: 20,
  },
  description: {
    fontSize: 14, color: '#999',
    marginHorizontal: 20, marginTop: 8, marginBottom: 20,
  },
  menu: { paddingHorizontal: 18 },
  menuItem: {
    backgroundColor: '#FFF', borderRadius: 15,
    padding: 15, marginBottom: 13,
    flexDirection: 'row', alignItems: 'center',
    elevation: 2,
  },
  iconBox: {
    width: 52, height: 52, borderRadius: 14,
    backgroundColor: '#EEEDFF',
    justifyContent: 'center', alignItems: 'center',
  },
  icon: { fontSize: 25 },
  menuText: { flex: 1, marginLeft: 13 },
  menuTitle: { fontSize: 15, fontWeight: 'bold', color: '#333' },
  menuSubtitle: { fontSize: 11, color: '#999', marginTop: 5 },
  arrow: { fontSize: 27, color: '#999' },
  banner: {
    backgroundColor: '#3529C5', marginHorizontal: 18,
    marginTop: 12, marginBottom: 25, padding: 20,
    borderRadius: 18, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between',
  },
  bannerTitle: { fontSize: 17, fontWeight: 'bold', color: '#FFF' },
  bannerSubtitle: { fontSize: 12, color: '#DDDAFF', marginTop: 7 },
  bannerButton: { fontSize: 13, fontWeight: 'bold', color: '#FFF', marginTop: 15 },
  bannerIcon: { fontSize: 48 },
  bottomNav: {
    height: 70, backgroundColor: '#FFF',
    flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navIcon: { fontSize: 25, color: '#999' },
  activeIcon: { fontSize: 25, color: '#3529C5' },
  navText: { fontSize: 11, color: '#999', marginTop: 3 },
  activeText: { fontSize: 11, color: '#3529C5', marginTop: 3 },
});
