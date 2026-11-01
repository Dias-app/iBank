
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

type ScreenName = keyof typeof screens | 'Home' | 'Search';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('SignIn');

  const navigate = (name: ScreenName) => {
    setScreen(name);
  };

  const CurrentScreen = screens[screen as keyof typeof screens];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {screen === 'Home' ? (
        <HomeScreen onNavigate={navigate} />
      ) : screen === 'Search' ? (
        <SearchScreen onNavigate={navigate} />
      ) : (
        <CurrentScreen navigate={navigate} />
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});