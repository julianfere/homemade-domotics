export const primary = {
  s400: '#5b8dd7',
  s500: '#3270cd',
  s600: '#285aa4',
  s700: '#1e437b',
  s800: '#142d52',
  s900: '#0a1629',
};

export const secondary = {
  s400: '#5c8bd6',
  s500: '#336ecc',
  s600: '#2958a3',
  s700: '#1f427a',
  s800: '#142c52',
  s900: '#0a1629',
};

export const accent = {
  s400: '#5c8dd6',
  s500: '#3370cc',
  s600: '#295aa3',
  s700: '#1f437a',
  s800: '#142d52',
  s900: '#0a1629',
};

export const background = {
  s400: '#5c93d6',
  s500: '#3378cc',
  s600: '#2960a3',
  s700: '#1f487a',
  s800: '#143052',
  s900: '#0a1829',
};

const Theme = {
  text: '#d6e2f5',
  background: '#03070c',
  primary: '#142d52',
  secondary: '#141F2E',
  accent: '#2f67bc',
  variants: {
    primary,
    secondary,
    accent,
    background,
  },
};

export type ThemeType = typeof Theme;

export default Theme;
