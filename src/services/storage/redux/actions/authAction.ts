// TODO: move api endpoint to .env file
const BASE_URL = 'https://www.makewavez.app/api';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

type AuthProps = {
  email: string;
  password: string;
};

export const loginUser = ({ email, password }: AuthProps) => {
  return async (dispatch: any) => {
    const result = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await result.json();

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.data,
    });
  };
};
