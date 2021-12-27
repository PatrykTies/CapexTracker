import React from 'react';
import {View, TextInput, Button} from 'react-native';

const ResetPassword = () => {
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => console.log({password})} />
    </View>
  );
};

export default ResetPassword;
