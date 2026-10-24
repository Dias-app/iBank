
import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Page,
  Field,
  PrimaryButton,
} from './UI';

export default function ChangePassword1({ navigate }: any) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <Page
      title="Change password"
      back={() => navigate('ForgotPassword4')}
    >
      <Text style={{
        marginTop: 30,
        color: '#AAA',
        marginBottom: 12,
      }}>
        Type your new password
      </Text>

      <Field
        placeholder="New password"
        password
        value={password}
        onChangeText={setPassword}
      />

      <Text style={{
        color: '#AAA',
        marginBottom: 12,
      }}>
        Confirm password
      </Text>

      <Field
        placeholder="Confirm password"
        password
        value={confirm}
        onChangeText={setConfirm}
      />

      <PrimaryButton
        title="Change password"
        onPress={() => navigate('ChangePassword2')}
      />
    </Page>
  );
}
