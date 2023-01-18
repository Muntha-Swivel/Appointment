import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './IconTInput.style';
import {IIconTInput} from './IconTInput.interface';
import {Text} from 'react-native';
const IconTInput = ({
  label,
  value,
  onChangeText,
  style,
  icon,
  onPressIcon,
}: IIconTInput) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      value={value}
      right={
        <TextInput.Icon
          icon={icon}
          onPress={onPressIcon}
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
      }
      mode="outlined"
      onChangeText={onChangeText}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
      style={[styles.input, style]}
    />
  );
};

export {IconTInput};
