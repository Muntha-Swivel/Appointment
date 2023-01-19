export interface IButton {
  text: string;
  onPress: () => void;
  width?: number;
  height?: number;
  loading?: boolean;
  disabled?: boolean;
}
//this is a common interface for buttons
