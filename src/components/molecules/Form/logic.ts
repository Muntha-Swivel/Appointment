import {addAppointmentService} from 'src/api/services/appointment';
import {IAppointment} from 'shared';
const addAppointment = async (appointment: IAppointment) => {
  try {
    await addAppointment(appointment);
    return 'success';
  } catch (err) {
    console.log(err);
    return 'failed';
  }
};
