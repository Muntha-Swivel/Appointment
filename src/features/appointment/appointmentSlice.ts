import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  addAppointmentService,
  getAllAppointmentService,
  confirmAppointmentService,
} from '../../api/services/appointment';
import {IAppointment} from 'shared';

const appointementSlice = createSlice({
  name: 'appointment',
  initialState: {
    appointments: [] as IAppointment[],
    appointment: {} as IAppointment,
    loading: false,
    networkError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllAppointments.pending, state => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(getAllAppointments.fulfilled, (state, action) => {
      state.appointments = action.payload;
      state.loading = false;
      state.networkError = false;
    });
    builder.addCase(getAllAppointments.rejected, state => {
      state.loading = false;
      state.networkError = true;
    });
    //Add Appointment
    builder.addCase(addAppointment.pending, state => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(addAppointment.fulfilled, (state, action) => {
      state.appointment = action.payload;
      state.loading = false;
      state.networkError = false;
    });
    builder.addCase(addAppointment.rejected, state => {
      state.loading = false;
      state.networkError = true;
    });
    //confrim Appointment
    builder.addCase(confirmAppointment.pending, state => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(confirmAppointment.fulfilled, (state, action) => {
      //state.appointment = action.payload;
      state.loading = false;
      state.networkError = false;
    });
    builder.addCase(confirmAppointment.rejected, state => {
      state.loading = false;
      state.networkError = true;
    });
  },
});

export const getAllAppointments = createAsyncThunk(
  'appointment/getAllAppointment',
  async () => {
    try {
      const response = await getAllAppointmentService();
      console.log(response.data.appointments);
      return response.data.appointments;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
);
export const addAppointment = createAsyncThunk(
  'appointment/addAppointment',
  async (appointement: IAppointment) => {
    try {
      const response = await addAppointmentService(appointement);
      console.log(response.data);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
);

export const confirmAppointment = createAsyncThunk(
  'appointment/confirmAppointment',
  async (appointement: IAppointment) => {
    try {
      const response = await confirmAppointmentService(appointement);
      console.log(response.data);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
);
export default appointementSlice.reducer;

// const updatedAppointments = state.appointments.map(item =>
//   item._id === action.payload._id ? action.payload : item,
// );

// state.appointments = updatedAppointments;
