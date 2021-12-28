import {NativeStackScreenProps} from '@react-navigation/native-stack';
// https://reactnavigation.org/docs/typescript
export type AuthNavigatorParamList = {
  Login: undefined;
  ResetPassword: undefined;
  Signup: undefined;
};

// https://reactnavigation.org/docs/typescript
export type LoginProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  'Login'
>;
