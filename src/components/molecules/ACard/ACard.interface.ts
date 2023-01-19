export interface IACard {
  date: string;
  time?: string;
  name: string;
  accept: () => void;
  decline: () => void;
}
