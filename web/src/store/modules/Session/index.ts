import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "../..";
import { ISession } from "./types";
import SignInRequest, {
  IBodyParamSignInRequest,
} from "../../../services/Session/SignInRequest";

const initialState: ISession = {
  user: {
    cpf: "",
    email: "",
    id: "",
    name: "",
  },
  token: "",
  account: null,
};

const session = createSlice({
  name: "session",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<ISession>) {
      state.account = action.payload.account;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    signOut(state) {
      state.account = initialState.account;
      state.token = initialState.token;
      state.user = initialState.user;
    },
  },
});

export const { signIn, signOut } = session.actions;

export function asyncSignIn(data: IBodyParamSignInRequest): AppThunk {
  // @ts-ignore
  return async function (dispatch: AppDispatch) {
    const response = await SignInRequest(data);
    dispatch(signIn(response));
  };
}

export default session.reducer;
