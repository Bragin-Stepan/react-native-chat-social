import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getUsersInformation} from '../../api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await getUsersInformation();
  return response;
});
