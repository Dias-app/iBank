
import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Page,
  Field,
  PrimaryButton,
  s,
} from './UI';

export default function ForgotPassword1({ navigate }: any) {
  const [phone, setPhone] = useState('');

  return (
    <Page title="Forgot password" back={() => navigate('SignIn')}>
      <Text style={{ color: '#AAA', marginTop: 28, marginBottom: 12 }}>
        Type your phone number
      </Text>

      <Field
        placeholder="(+7) 000 000 0000"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={s.hint}>
        We texted you a code to verify your phone number
      </Text>

      <PrimaryButton
        title="Continue"
        onPress={() => navigate('ForgotPassword2')}
      />
    </Page>
  );
}
