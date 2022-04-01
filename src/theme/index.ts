import { Platform } from 'react-native';
import {
  createTheme,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';

const fonts = {
  ...Platform.select({
    ios: {
      thin: 'SFProDisplay-Thin',
      regular: 'SFProDisplay-Regular',
      semiBold: 'SFProDisplay-Semibold',
      bold: 'SFProDisplay-Bold',
    },
    android: {
      thin: 'SFProDisplay-Thin',
      regular: 'SFProDisplay-Regular',
      semiBold: 'SFProDisplay-Semibold',
      bold: 'SFProDisplay-Bold',
    },
  }),
};

const palette = {
  white: 'white',
  yellow: 'yellow',
  black: '#0B0B0B',
  grey: '#909190',
  blue: '#0000ff',
  red: 'red',
  none: 'transparent',
};

const fontSize = {
  sm: 8,
  body: 16,
  lg: 20,
  xl: 28,
};

const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
};

const theme = createTheme({
  colors: {
    primaryBckgr: palette.white,
    secondaryBckgr: palette.grey,
    textPrimary: palette.black,
    textPrimaryInverse: palette.white,
    textDecorated: palette.blue,
    primary: palette.blue,
    primary_inverse: palette.white,
    none: palette.none,
    black: palette.black,
    shadow: palette.grey,
    error: palette.red,
    yellow: palette.yellow,
  },
  spacing: spacing,
  fontSize: fontSize,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardVariants: {
    shadow_md: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 10,
    },
    shadow_s: {
      shadowColor: 'shadow',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 3,
      shadowOpacity: 0.26,
      elevation: 6,
    },
  },
  textVariants: {
    h1: {
      fontFamily: fonts.semiBold,
      fontSize: fontSize.xl,
      lineHeight: 42.5,
      color: 'textPrimary',
    },
    h1_deco: {
      fontFamily: fonts.semiBold,
      fontSize: fontSize.xl,
      lineHeight: 42.5,
      color: 'textDecorated',
    },
    h1_thin: {
      fontFamily: fonts.thin,
      fontSize: fontSize.xl,
      lineHeight: 42.5,
      color: 'textDecorated',
    },
    h2: {
      fontFamily: fonts.regular,
      fontSize: fontSize.lg,
      lineHeight: 36,
      color: 'textPrimary',
    },
    body: {
      fontFamily: fonts.regular,
      fontSize: fontSize.body,
      lineHeight: 28,
      color: 'textPrimary',
    },
    cta: {
      fontFamily: fonts.semiBold,
      fontSize: fontSize.body,
      lineHeight: 28,
      letterSpacing: 1,
      color: 'textPrimary',
    },
    inputError: {
      fontFamily: fonts.regular,
      fontSize: fontSize.body,
      lineHeight: 22,
      color: 'error',
      position: 'absolute',
      bottom: -spacing.lg,
    },
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'cardVariants' })], Box);

export default theme;
