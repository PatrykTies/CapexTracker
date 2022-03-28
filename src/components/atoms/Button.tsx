import React from 'react';
import {Pressable} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BackgroundColorProps,
  BorderProps,
} from '@shopify/restyle';

import {Text, Box, Theme} from '../../theme';

const restyleFunctions = [spacing, border, backgroundColor];

type ButtonProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label: string;
  };

const Button: React.FC<ButtonProps> = ({onPress, label, ...rest}) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Pressable onPress={onPress}>
      <Box
        {...props}
        borderWidth={1}
        borderColor="primary"
        backgroundColor="primary">
        <Text
          variant="cta"
          paddingHorizontal="lg"
          paddingVertical="sm"
          textAlign="center"
          color="textPrimaryInverse">
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
