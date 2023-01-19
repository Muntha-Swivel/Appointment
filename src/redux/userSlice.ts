import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUsersService} from '../api/services/appointment';

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as UserData[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await getUsersService();
  console.log(response.data.data);
  return response.data.data;
});

export default usersSlice.reducer;
