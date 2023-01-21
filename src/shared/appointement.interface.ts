export interface IAppointment {
  _id?: string;
  name: string;
  date: string;
  email: string;
  mobile: string;
  startTime?: string;
  endTime?: string;
  duration?: string;
  confirmed: boolean;
}
