import {createTamagui} from 'tamagui';
import {themes, tokens} from '@tamagui/themes';
import {shorthands} from '@tamagui/shorthands';
import {createAnimations} from '@tamagui/animations-react-native';

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const config = createTamagui({
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  animations,
  themes,
  tokens,
  shorthands,
  fonts: {
    body: {
      family: 'System',
      size: 16,
    },
  },
  media: {
    xs: {maxWidth: 660},
    sm: {maxWidth: 800},
    md: {maxWidth: 1020},
    lg: {maxWidth: 1280},
    xl: {maxWidth: 1420},
    xxl: {maxWidth: 1600},
    gtXs: {minWidth: 660 + 1},
    gtSm: {minWidth: 800 + 1},
    gtMd: {minWidth: 1020 + 1},
    gtLg: {minWidth: 1280 + 1},
  },
});

export type AppConfig = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
