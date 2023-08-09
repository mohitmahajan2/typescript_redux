import { LOGIN, TOKEN_GENRATE } from "../types";
import authService from "../service/authService";
import {
  errorToast,
  unAuthorizedError,
  successToast,
} from "../../utils/httpClient";

export const jwtTokenGenrate = () => async (dispatch: any) => {
  try {
    const res = await authService.tokenGenrate();
    if (res.data.status === 200) {
      dispatch({
        type: TOKEN_GENRATE,
        payload: res.data,
      });
    }
  } catch (e) {
    console.log("e", e);
    errorToast("User is un-authorized");
  }
};

type loginProps = {
  email: string;
  password: string;
};

export const adminLogin = (data: loginProps) => async (dispatch: any) => {
  try {
    const res = await authService.userLogin(data);
    if (res.data.status === 200) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    }
  } catch (e) {
    console.log("e", e);
    errorToast("User is un-authorized");
  }
};
