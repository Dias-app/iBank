
import React from 'react';
import { View, Text } from 'react-native';
import {
  Page,
  PrimaryButton,
  PURPLE,
} from './UI';

export default function ChangePassword2({ navigate }: any) {
  return (
    <Page title="" back={() => navigate('SignIn')}>
      <View style={{
        minHeight: 550,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
          width: 160,
          height: 190,
          borderRadius: 25,
          backgroundColor: '#EFEDFF',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 35,
        }}>
          <Text style={{ fontSize: 85 }}>📱</Text>
          <Text style={{ color: PURPLE, fontSize: 36 }}>✓</Text>
        </View>

        <Text style={{
          color: PURPLE,
          fontWeight: '700',
          fontSize: 18,
          textAlign: 'center',
        }}>
          Change password successfully!
        </Text>

        <Text style={{
          color: '#555',
          fontSize: 13,
          textAlign: 'center',
          lineHeight: 21,
          marginVertical: 22,
        }}>
          You have successfully changed password.
          Please use the new password when Sign in.
        </Text>

        <View style={{ width: '100%' }}>
          <PrimaryButton
            title="OK"
            onPress={() => navigate('SignIn')}
          />
        </View>
      </View>
    </Page>
  );
}
