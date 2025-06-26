import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import {en} from '../../lang/en';

type TextAreaInputProps = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
};

export const Input = ({
  value,
  onChangeText,
  placeholder = en.addNotes,
  inputStyle,
  ...props
}: TextAreaInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
      numberOfLines={3}
      textAlignVertical="top"
      multiline
      style={[styles.input, inputStyle]}
      {...props}
    />
  );
};
