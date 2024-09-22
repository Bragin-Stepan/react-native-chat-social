import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {IProfileItemProps} from '../../types';
import {fetchUsers} from '../actions/users';

interface UserState {
  users: IProfileItemProps[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.sort((a: any, b: any) => {
          return (
            new Date(b.lastMessageTime).getTime() -
            new Date(a.lastMessageTime).getTime()
          );
        });
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
