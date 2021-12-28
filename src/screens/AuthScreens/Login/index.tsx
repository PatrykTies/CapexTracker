import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {Card, Box, Text} from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <Text variant="body">Test font family</Text>
      <Text variant="h1_deco">Test font family</Text>
      <Text variant="h1_thin">Test font family</Text>
      <Icon name="rocket" size={30} color="#900" />
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
