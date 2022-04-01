import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text } from '../../theme';

type LinkButtonProps = {
  onPress: () => void;
  label: string;
  variant: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ onPress, label }) => {
  return (
    <BorderlessButton onPress={onPress}>
      <Text variant="cta" color="textDecorated">
        {label}
      </Text>
    </BorderlessButton>
  );
};

export default LinkButton;
