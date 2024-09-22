import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {IProfileItemProps, IUserMessagesState} from '../../types';
import {fetchUserMessages} from '../actions/user-messages';

interface UserMessagesState {
  userMessages: IUserMessagesState[];
  messagesLoading: boolean;
}

const initialState: UserMessagesState = {
  userMessages: [],
  messagesLoading: false,
};

export const userMessagesSlice = createSlice({
  name: 'userMessages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserMessages.pending, state => {
        state.messagesLoading = true;
      })
      .addCase(fetchUserMessages.fulfilled, (state, action) => {
        state.userMessages = action.payload.sort((a: any, b: any) => {
          return (
            new Date(b.messages[b.messages.length - 1].timestamp).getTime() -
            new Date(a.messages[a.messages.length - 1].timestamp).getTime()
          );
        });
        state.messagesLoading = false;
      })
      .addCase(fetchUserMessages.rejected, state => {
        state.messagesLoading = false;
      });
  },
});

export default userMessagesSlice.reducer;
