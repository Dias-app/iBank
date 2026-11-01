import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  onNavigate: (screen: 'Home' | 'Search') => void;
};

const searchItems = [
  {
    title: 'Branch',
    subtitle: 'Search for branch',
    icon: 'bank',
    color: '#3478F6'
  },
  {
    title: 'Interest rate',
    subtitle: 'Search for interest rate',
    icon: 'chart-box',
    color: '#3478F6'
  },
  {
    title: 'Exchange rate',
    subtitle: 'Search for exchange rate',
    icon: 'chart-line',
    color: '#6654D9'
  },
  {
    title: 'Exchange',
    subtitle: 'Exchange amount of money',
    icon: 'currency-usd',
    color: '#3478F6'
  }
];

export default function SearchScreen({ onNavigate }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.heading}>
        <TouchableOpacity
          onPress={() => onNavigate('Home')}
          style={styles.back}
        >
          <Ionicons
            name="chevron-back"
            size={23}
            color="#333333"
          />
        </TouchableOpacity>

        <Text style={styles.headingText}>Search</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {searchItems.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.card}
          >
            <View style={styles.cardText}>
              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.subtitle}>
                {item.subtitle}
              </Text>
            </View>

            <View style={styles.illustration}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={43}
                color={item.color}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onNavigate('Home')}
        >
          <Ionicons
            name="home-outline"
            size={21}
            color="#888888"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.activeTab}
          onPress={() => onNavigate('Search')}
        >
          <Ionicons
            name="search"
            size={17}
            color="#FFFFFF"
          />

          <Text style={styles.activeText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#888888"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="settings-outline"
            size={22}
            color="#888888"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  heading: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },

  back: {
    width: 30,
    justifyContent: 'center'
  },

  headingText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5
  },

  list: {
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 20
  },

  card: {
    minHeight: 90,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    paddingHorizontal: 16,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },

  cardText: {
    flex: 1
  },

  title: {
    color: '#333333',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6
  },

  subtitle: {
    color: '#999999',
    fontSize: 10
  },

  illustration: {
    width: 92,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  bottomBar: {
    height: 62,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  activeTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3926C9',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7
  },

  activeText: {
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: 5
  },

  tab: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  }
});