import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import usersRedcuer from './userSlice';
export const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersRedcuer,
  },
});
