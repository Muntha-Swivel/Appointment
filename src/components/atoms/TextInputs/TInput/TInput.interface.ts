import {View, ViewStyle} from 'react-native';
export interface ITInput {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  style?: ViewStyle;
  error: boolean;
}
