import {axiosClient} from '../apiClient';
import {IAppointment} from 'shared';

const getAllAppointmentService = () => {
  return axiosClient.get('/');
};
const addAppointmentService = (appointement: IAppointment) => {
  return axiosClient.post('/addAppointment', JSON.stringify(appointement));
};
const confirmAppointmentService = (appointment: IAppointment) => {
  return axiosClient.post('confirmAppointment', JSON.stringify(appointment));
};
// const getEmployeeByIdService = (id?: string) => {
//   return axiosClient.get(`/getEmployee/${id}`);
// };
// const addEmployeeService = (employee: IEmployee) => {
//   return axiosClient.post("/", JSON.stringify(employee));
// };
// const updateUpdateEmployeeService = (employee: IEmployee) => {
//   return axiosClient.post("/update", JSON.stringify(employee));
// };
// const removeEmployeeService = (id: string) => {
//   return axiosClient.get(`/removeEmployee/${id}`);
// };

export {
  getAllAppointmentService,
  addAppointmentService,
  confirmAppointmentService,
};
