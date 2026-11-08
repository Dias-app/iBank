import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import {
  Page,
  Welcome,
  Field,
  PrimaryButton,
  LinkText,
} from './UI';

export default function SignUp2({ navigate }: any) {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const register = () => {
    if (!name.trim() || !login.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must contain at least 6 characters');
      return;
    }

    if (!agree) {
      Alert.alert('Error', 'Please agree to the terms');
      return;
    }

    Alert.alert('Success', 'Registration completed');
    navigate('SignIn');
  };

  return (
    <Page title="Sign up" back={() => navigate('SignUp1')}>
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

      <Text
        onPress={() => setAgree(!agree)}
        style={{ fontSize: 12, marginVertical: 14 }}
      >
        {agree ? '☑' : '☐'} By creating an account you agree to our Terms and Conditions
      </Text>

      <PrimaryButton
        title="Sign up"
        disabled={!agree}
        onPress={register}
      />

      <LinkText
        text="Have an account? Sign in"
        onPress={() => navigate('SignIn')}
      />
    </Page>
  );
}