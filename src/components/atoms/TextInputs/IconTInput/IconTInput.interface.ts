import {View, ViewStyle} from 'react-native';
export interface IIconTInput {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  icon: string;
  onPressIcon: () => void;
  style?: ViewStyle;
}
