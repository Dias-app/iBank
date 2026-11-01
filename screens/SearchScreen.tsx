import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

type Props = {
  onNavigate: (screen: 'Home' | 'Search' | 'Exchange') => void;
};

export default function SearchScreen({ onNavigate }: Props) {
  const menuItems = [
    {
      title: 'Branch',
      subtitle: 'Find the nearest bank branch',
      icon: '🏦',
      screen: 'Search' as const,
    },
    {
      title: 'Interest rate',
      subtitle: 'Check current interest rates',
      icon: '📊',
      screen: 'Search' as const,
    },
    {
      title: 'Exchange rate',
      subtitle: 'View currency exchange rates',
      icon: '💱',
      screen: 'Exchange' as const,
    },
    {
      title: 'Exchange',
      subtitle: 'Exchange your money',
      icon: '💵',
      screen: 'Exchange' as const,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => onNavigate('Home')}
          style={styles.backButton}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>What are you looking for?</Text>

        <Text style={styles.description}>
          Choose a service below
        </Text>

        {/* Menu */}
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => onNavigate(item.screen)}
              activeOpacity={0.7}
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

        {/* Exchange Banner */}
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

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate('Home')}
        >
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.activeIcon}>⌕</Text>
          <Text style={styles.activeText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>✉</Text>
          <Text style={styles.navText}>Mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙</Text>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
  },

  backButton: {
    marginRight: 15,
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

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#292929',
    marginTop: 25,
    marginHorizontal: 20,
  },

  description: {
    fontSize: 14,
    color: '#999999',
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 20,
  },

  menu: {
    paddingHorizontal: 18,
  },

  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#EEEDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 25,
  },

  menuText: {
    flex: 1,
    marginLeft: 13,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },

  menuSubtitle: {
    fontSize: 11,
    color: '#999999',
    marginTop: 5,
  },

  arrow: {
    fontSize: 27,
    color: '#999999',
  },

  banner: {
    backgroundColor: '#3529C5',
    marginHorizontal: 18,
    marginTop: 12,
    marginBottom: 25,
    padding: 20,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bannerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  bannerSubtitle: {
    fontSize: 12,
    color: '#DDDAFF',
    marginTop: 7,
  },

  bannerButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
  },

  bannerIcon: {
    fontSize: 48,
  },

  bottomNav: {
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 25,
    color: '#999999',
  },

  activeIcon: {
    fontSize: 25,
    color: '#3529C5',
  },

  navText: {
    fontSize: 11,
    color: '#999999',
    marginTop: 3,
  },

  activeText: {
    fontSize: 11,
    color: '#3529C5',
    marginTop: 3,
  },
});