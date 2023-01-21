import {IAppointment} from 'shared';
import {confirmAppointment as confirm} from '../../../features/appointment/appointmentSlice';
const filterAppointments = (appointments: IAppointment[], value: string) => {
  const data = appointments.filter(appointment => {
    if (value === 'confirmed') {
      return appointment.confirmed === true;
    }
    if (value === 'all') {
      return appointment;
    }
    if (value === 'pending') {
      return appointment.confirmed === false;
    }
  });
  return data;
};

const calculateDuration = (startTime: Date, endTime: Date) => {
  const sTimeM = startTime.getMinutes() + startTime.getHours() * 60;
  const eTimeM = endTime.getMinutes() + endTime.getHours() * 60;
  let duration = eTimeM - sTimeM;
  let hours = Math.floor(duration / 60);
  let minutes = duration % 60;
  return {hours, minutes};
};

const confirmAppointment = (
  appointment: IAppointment,
  startTime: string,
  endTime: string,
  duration: string,
  dispatch: any,
) => {
  const updatedAppointment = {
    ...appointment,
    startTime: startTime,
    endTime: endTime,
    duration: duration,
    confirmed: true,
  };
  console.log(updatedAppointment);
  dispatch(confirm(updatedAppointment));
};

const buttons = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Confirmed',
    value: 'confirmed',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
];

export {buttons, filterAppointments, confirmAppointment, calculateDuration};
