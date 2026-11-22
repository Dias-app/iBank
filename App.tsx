
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SignIn from './screens/SignInScreen';
import SignUp1 from './screens/SignUpScreen1';
import SignUp2 from './screens/SignUpScreen2';

import ForgotPassword1 from './screens/ForgotPassword1';
import ForgotPassword2 from './screens/ForgotPassword2';
import ForgotPassword3 from './screens/ForgotPassword3';
import ForgotPassword4 from './screens/ForgotPassword4';

import ChangePassword1 from './screens/ChangePassword1';
import ChangePassword2 from './screens/ChangePassword2';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ExchangeScreen from './screens/ExchangeScreen';

import BranchScreen from './screens/BranchScreen';
import InterestRateScreen from './screens/InterestRateScreen';
import ExchangeRateScreen from './screens/ExchangeRateScreen';
import LanguageScreen from './screens/LanguageScreen';

const screens = {
  SignIn,
  SignUp1,
  SignUp2,
  ForgotPassword1,
  ForgotPassword2,
  ForgotPassword3,
  ForgotPassword4,
  ChangePassword1,
  ChangePassword2,
};

export type ScreenName =
  | keyof typeof screens
  | 'Home'
  | 'Search'
  | 'Exchange'
  | 'Branch'
  | 'InterestRate'
  | 'ExchangeRate'
  | 'Language';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('SignIn');
  const [userName, setUserName] = useState('User');

  const navigate = (name: ScreenName, newUserName?: string) => {
    if (newUserName) setUserName(newUserName);
    setScreen(name);
  };

  const CurrentScreen =
    screen in screens
      ? screens[screen as keyof typeof screens]
      : null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {screen === 'Home' ? (
        <HomeScreen onNavigate={navigate} userName={userName} />
      ) : screen === 'Search' ? (
        <SearchScreen onNavigate={navigate} />
      ) : screen === 'Exchange' ? (
        <ExchangeScreen onNavigate={navigate} />
      ) : screen === 'Branch' ? (
        <BranchScreen onBack={() => navigate('Search')} />
      ) : screen === 'InterestRate' ? (
        <InterestRateScreen onBack={() => navigate('Search')} />
      ) : screen === 'ExchangeRate' ? (
        <ExchangeRateScreen onBack={() => navigate('Search')} />
      ) : screen === 'Language' ? (
        <LanguageScreen onBack={() => navigate('Search')} />
      ) : CurrentScreen ? (
        <CurrentScreen navigate={navigate} />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
