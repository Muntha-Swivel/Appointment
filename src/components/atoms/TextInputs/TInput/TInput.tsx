import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {ITInput} from './TInput.interface';
import {Text} from 'react-native';
import {styles} from './TInput.style';
const TInput = ({label, value, onChangeText, style, error}: ITInput) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      value={value}
      mode="outlined"
      onChangeText={onChangeText}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
      style={[styles.input, style]}
      error={error}
    />
  );
};

export {TInput};
