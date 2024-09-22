import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InputState {
  inputTerm: string;
}

const initialState: InputState = {
  inputTerm: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputTerm: (state, action: PayloadAction<string>) => {
      state.inputTerm = action.payload;
    },
    clearInputTerm: state => {
      state.inputTerm = '';
    },
  },
});

export const {setInputTerm, clearInputTerm} = inputSlice.actions;

export default inputSlice.reducer;
