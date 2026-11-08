import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import {
  Page,
  Field,
  PrimaryButton,
  s,
} from './UI';

export default function ForgotPassword2({ navigate }: any) {
  const [phone, setPhone] = useState('');

  const sendCode = () => {
    if (phone.replace(/\D/g, '').length < 11) {
      Alert.alert('Error', 'Enter a valid phone number');
      return;
    }

    navigate('ForgotPassword3');
  };

  return (
    <Page
      title="Forgot password"
      back={() => navigate('ForgotPassword1')}
    >
      <Text style={{ color: '#AAA', marginTop: 28, marginBottom: 12 }}>
        Confirm your phone number
      </Text>

      <Field
        placeholder="+7 777 123 4567"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={s.hint}>
        Check your phone number before continuing.
      </Text>

      <PrimaryButton
        title="Send code"
        onPress={sendCode}
      />
    </Page>
  );
}