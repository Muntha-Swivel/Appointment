import {configureStore} from '@reduxjs/toolkit';
//import usersRedcuer from './userSlice';
import appoinmentReducer from '../features/appointment/appointmentSlice';
export const store = configureStore({
  reducer: {
    appointment: appoinmentReducer,
  },
});
