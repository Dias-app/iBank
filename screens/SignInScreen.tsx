
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  Page,
  Welcome,
  Field,
  PrimaryButton,
  LinkText,
  s,
  PURPLE,
} from './UI';

export default function SignIn({ navigate }: any) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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
        onPress={() => setMessage('Demo: Sign in батырмасы жұмыс істейді')}
      />

      {message ? (
        <Text style={{ color: PURPLE, textAlign: 'center', marginTop: 15 }}>
          {message}
        </Text>
      ) : null}

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
