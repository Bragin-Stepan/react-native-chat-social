import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {IProfileItemProps} from '../../types';
import {fetchUsers} from '../actions/users';

interface UserState {
  users: IProfileItemProps[];
  usersLoading: boolean;
}

const initialState: UserState = {
  users: [],
  usersLoading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.usersLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.usersLoading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.usersLoading = false;
      });
  },
});

export default usersSlice.reducer;
