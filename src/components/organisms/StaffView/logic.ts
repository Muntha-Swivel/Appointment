import {IAppointment} from 'shared';
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

export {buttons, filterAppointments};
