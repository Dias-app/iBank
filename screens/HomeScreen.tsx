import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onNavigate: (screen: 'Home' | 'Search') => void;
};

export default function HomeScreen({ onNavigate }: Props) {
  const actions = [
    { title: 'Account and Card', icon: 'card-outline' as const },
    { title: 'Transfer', icon: 'swap-horizontal-outline' as const },
    { title: 'Withdraw', icon: 'cash-outline' as const },
    { title: 'Mobile prepaid', icon: 'phone-portrait-outline' as const },
    { title: 'Pay the bill', icon: 'receipt-outline' as const },
    { title: 'Save online', icon: 'wallet-outline' as const },
    { title: 'Credit card', icon: 'card-outline' as const },
    { title: 'Transaction report', icon: 'document-text-outline' as const },
    { title: 'Beneficiary', icon: 'people-outline' as const },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome back,</Text>
            <Text style={styles.username}>John Smith</Text>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.bankCard}>
          <Text style={styles.cardName}>iBank</Text>
          <Text style={styles.cardNumber}>**** **** **** 4589</Text>
          <Text style={styles.balanceTitle}>Your balance</Text>
          <Text style={styles.balance}>$3,469.52</Text>
          <Text style={styles.cardHolder}>JOHN SMITH</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actions}>
          {actions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.actionItem}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={27} color="#5B55D9" />
              </View>
              <Text style={styles.actionText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate('Home')}
        >
          <Ionicons name="home" size={24} color="#5B55D9" />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate('Search')}
        >
          <Ionicons name="search-outline" size={24} color="#777777" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={24} color="#777777" />
          <Text style={styles.navText}>Mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="#777777" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    backgroundColor: '#625BD9',
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    color: '#E2E0FF',
    fontSize: 16,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
  notification: {
    padding: 10,
  },
  bankCard: {
    backgroundColor: '#3267C8',
    marginHorizontal: 20,
    marginTop: -48,
    padding: 22,
    borderRadius: 18,
    minHeight: 190,
  },
  cardName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 17,
    marginTop: 22,
    letterSpacing: 2,
  },
  balanceTitle: {
    color: '#DCE5FF',
    fontSize: 13,
    marginTop: 15,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 3,
  },
  cardHolder: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 12,
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginHorizontal: 22,
    marginTop: 28,
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  actionItem: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconBox: {
    width: 58,
    height: 58,
    backgroundColor: '#E9E8FF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#333333',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 9,
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
  activeNavText: {
    color: '#5B55D9',
    fontSize: 11,
    marginTop: 4,
  },
  navText: {
    color: '#777777',
    fontSize: 11,
    marginTop: 4,
  },
});