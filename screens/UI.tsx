
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export const PURPLE = '#3926B8';

export function Page({ title, back, children }: any) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#FFFFFF' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={s.page}
      >
        <View style={s.header}>
          <TouchableOpacity onPress={back}>
            <Text style={s.arrow}>‹</Text>
          </TouchableOpacity>

          <Text style={s.headerText}>{title}</Text>
        </View>

        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export function Welcome({ signup = false }: { signup?: boolean }) {
  return (
    <View>
      <Text style={s.welcome}>
        {signup ? 'Welcome to us,' : 'Welcome Back'}
      </Text>

      <Text style={s.subtitle}>
        Hello there, glad to see you!
      </Text>

      <View style={s.art}>
        <View style={s.artCircle}>
          <Text style={s.artIcon}>{signup ? '✦' : '♧'}</Text>
        </View>

        <View style={[s.dot, {
          top: 20,
          right: 70,
          backgroundColor: '#FA477B',
        }]} />

        <View style={[s.dot, {
          bottom: 25,
          left: 65,
          backgroundColor: '#FFB52E',
        }]} />

        <View style={[s.dot, {
          top: 40,
          left: 50,
          backgroundColor: '#42D4C2',
        }]} />
      </View>
    </View>
  );
}

export function Field({
  placeholder,
  value,
  onChangeText,
  password = false,
  keyboardType,
}: any) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={s.field}>
      <TextInput
        style={s.input}
        placeholder={placeholder}
        placeholderTextColor="#B9B9C2"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password && !visible}
        keyboardType={keyboardType || 'default'}
        autoCapitalize="none"
      />

      {password && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text style={s.eye}>{visible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export function PrimaryButton({
  title,
  onPress,
  disabled = false,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[s.button, disabled && s.disabled]}
    >
      <Text style={s.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function LinkText({ text, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={s.link}>{text}</Text>
    </TouchableOpacity>
  );
}

export const s = StyleSheet.create({
  page: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  header: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 32,
    color: '#181818',
    marginRight: 15,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
  welcome: {
    fontSize: 26,
    fontWeight: '800',
    color: PURPLE,
    marginTop: 14,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  art: {
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E5E3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artIcon: {
    fontSize: 66,
    color: PURPLE,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6ED',
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    minHeight: 51,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#222',
    minHeight: 50,
  },
  eye: {
    color: PURPLE,
    paddingHorizontal: 12,
    fontSize: 12,
  },
  button: {
    backgroundColor: PURPLE,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  disabled: {
    backgroundColor: '#C4BDEA',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  link: {
    color: PURPLE,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 20,
  },
  hint: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
    marginVertical: 12,
  },
});
