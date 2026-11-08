import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';

import {
  Page,
  Welcome,
  Field,
  PrimaryButton,
  LinkText,
  s,
} from './UI';

export default function SignIn({ navigate }: any) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    if (!login.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter login and password');
      return;
    }

    navigate('Home');
  };

  return (
    <Page title="Sign in" back={() => {}}>
      <Welcome />

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
        style={{
          textAlign: 'right',
          color: '#999',
          fontSize: 12,
          marginTop: 4,
        }}
        onPress={() => navigate('ForgotPassword1')}
      >
        Forgot your password?
      </Text>

      <PrimaryButton
        title="Sign in"
        onPress={signIn}
      />

      <View style={{ marginTop: 50 }}>
        <Text style={[s.hint, { textAlign: 'center' }]}>
          Don't have an account?
        </Text>

        <LinkText
          text="Sign up"
          onPress={() => navigate('SignUp1')}
        />
      </View>
    </Page>
  );
}