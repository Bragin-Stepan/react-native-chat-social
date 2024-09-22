import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getUserMessages} from '../../api';

export const fetchUserMessages = createAsyncThunk(
  'userMessages/fetchUserMessages',
  async () => {
    const response = await getUserMessages();
    return response;
  },
);
