import {
  LOGIN,
  TOKEN_GENRATE,
} from "../types";

const initialState = {
  response: null,
  authToken: false,
  loading: true,
  create: false,
  detail: false,
};

export function authStore(state = initialState, action) {
  switch (action.type) {
    case TOKEN_GENRATE:
      return {
        ...state,
        response: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        response: action.payload,
        loading:false,
        authToken:true
      };
    default:
      return state;
  }
}

