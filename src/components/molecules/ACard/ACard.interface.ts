export interface IACard {
  date: string;
  time?: string;
  name: string;
  mobile: string;
  email: string;
  duration?: string;
  accept: () => void;
  decline: () => void;
  acceptButtonDisabled: boolean;
  acceptButtonText: string;
}
