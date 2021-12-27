import React from 'react';
import {View, TextInput, Button} from 'react-native';

const Login = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={() => console.log({email, password})} />
      <Button
        title="Reset"
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  );
};

export default Login;
