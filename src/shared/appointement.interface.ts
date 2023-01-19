export interface IAppointment {
  _id?: string;
  name: string;
  date: string;
  email: string;
  mobile: string;
  time?: string;
  confirmed: boolean;
}
