
import React, { useState } from 'react';
import { Text } from 'react-native';
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

      <Text style={{ fontSize: 12, color: '#666', marginVertical: 14 }}>
        □ By creating an account you agree to our Terms and Conditions
      </Text>

      <PrimaryButton
        title="Continue"
        onPress={() => navigate('SignUp2')}
      />

      <LinkText
        text="Have an account? Sign in"
        onPress={() => navigate('SignIn')}
      />
    </Page>
  );
}
