import {ViewStyle} from 'react-native';
export interface IDateInput {
  isOpen: boolean;
  onConfirm: (val: Date) => void;
  onCancel: () => void;
  style?: ViewStyle;
  date: Date;
}
