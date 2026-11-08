import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import {
  Page,
  Field,
  PrimaryButton,
  LinkText,
  s,
} from './UI';

export default function ForgotPassword4({ navigate }: any) {
  const [code, setCode] = useState('');

  const verifyCode = () => {
    if (code.length < 4) {
      Alert.alert('Error', 'Enter the verification code');
      return;
    }

    navigate('ChangePassword1');
  };

  return (
    <Page
      title="Forgot password"
      back={() => navigate('ForgotPassword3')}
    >
      <Text style={{ color: '#AAA', marginTop: 28 }}>
        Confirm your code
      </Text>

      <Field
        placeholder="Enter verification code"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
      />

      <Text style={s.hint}>
        Enter the code sent to your phone number.
      </Text>

      <PrimaryButton
        title="Change password"
        onPress={verifyCode}
      />

      <LinkText
        text="Change your phone number"
        onPress={() => navigate('ForgotPassword1')}
      />
    </Page>
  );
}