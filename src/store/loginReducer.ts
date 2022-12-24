import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILogin {
  login: string;
}

const initialState: ILogin = {
  login: "welcome",
};

const sliceReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
  },
});

export const loginReducer = sliceReducer.reducer;
export const { setLogin } = sliceReducer.actions;
