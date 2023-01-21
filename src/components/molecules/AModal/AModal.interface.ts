export interface IAModal {
  visible: boolean;
  onDismiss: () => void;
  startTime: string;
  endTime: string;
  duration: string;
  onPressStartTime: () => void;
  onPressEndTime: () => void;
  onPressConfirm: () => void;
  confirmBtnDisabled: boolean;
}
