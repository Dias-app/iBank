
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  Page,
  Field,
  PrimaryButton,
  LinkText,
  s,
} from './UI';

export default function ForgotPassword4({ navigate }: any) {
  const [code, setCode] = useState('');

  return (
    <Page
      title="Forgot password"
      back={() => navigate('ForgotPassword3')}
    >
      <Text style={{ color: '#AAA', marginTop: 28 }}>
        Type your code
      </Text>

      <View style={{ marginTop: 15 }}>
        <Field
          placeholder="Enter verification code"
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
        />
      </View>

      <Text style={s.hint}>
        We texted you a code to verify your phone number.
      </Text>

      <Text style={s.hint}>
        This code will expire 10 minutes after this message.
      </Text>

      <PrimaryButton
        title="Change password"
        onPress={() => navigate('ChangePassword1')}
      />

      <LinkText
        text="Change your phone number"
        onPress={() => navigate('ForgotPassword1')}
      />
    </Page>
  );
}
