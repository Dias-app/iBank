import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import {
  Page,
  Field,
  PrimaryButton,
  LinkText,
  s,
} from './UI';

export default function ForgotPassword3({ navigate }: any) {
  const [code, setCode] = useState('');

  const continueNext = () => {
    if (code.length < 4) {
      Alert.alert('Error', 'Enter the verification code');
      return;
    }

    navigate('ForgotPassword4');
  };

  return (
    <Page
      title="Forgot password"
      back={() => navigate('ForgotPassword2')}
    >
      <Text style={{ color: '#AAA', marginTop: 28 }}>
        Type your code
      </Text>

      <Field
        placeholder="Code"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
      />

      <Text style={s.hint}>
        We sent you a verification code.
      </Text>

      <Text style={s.hint}>
        This code will expire 10 minutes after this message.
      </Text>

      <PrimaryButton
        title="Continue"
        onPress={continueNext}
      />

      <LinkText
        text="Change your phone number"
        onPress={() => navigate('ForgotPassword1')}
      />
    </Page>
  );
}