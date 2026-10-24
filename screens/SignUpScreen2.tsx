
import React, { useState } from 'react';
import { Text } from 'react-native';
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
  const [agree, setAgree] = useState(true);

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
        onPress={() => navigate('SignIn')}
      />

      <LinkText
        text="Have an account? Sign in"
        onPress={() => navigate('SignIn')}
      />
    </Page>
  );
}
