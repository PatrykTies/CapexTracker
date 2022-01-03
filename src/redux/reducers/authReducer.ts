import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from '../actions/authAction';

const initialState = {
  user: {},
  error: {},
  isAuthenticated: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      console.log('LOGIN_USER_SUCCESS', action.payload);
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
  }

  return state;
}
