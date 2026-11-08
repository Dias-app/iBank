import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  Page,
  Welcome,
  Field,
  PrimaryButton,
  LinkText,
} from './UI';

export default function SignUp1({ navigate }: any) {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const continueRegistration = () => {
    if (!name.trim() || !login.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must contain at least 6 characters');
      return;
    }

    navigate('SignUp2');
  };

  return (
    <Page title="Sign up" back={() => navigate('SignIn')}>
      <Welcome signup />

      <Field
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <Field
        placeholder="Your login"
        value={login}
        onChangeText={setLogin}
      />

      <Field
        placeholder="Password"
        password
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton
        title="Continue"
        onPress={continueRegistration}
      />

      <LinkText
        text="Have an account? Sign in"
        onPress={() => navigate('SignIn')}
      />
    </Page>
  );
}