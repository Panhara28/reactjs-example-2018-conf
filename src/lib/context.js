import React from 'react';

export const theme = {
  golden: 'theme-golden',
  default: 'default-theme'
};

export const locale = {
  rainbow: 'EN'
};

export const ThemeContext = React.createContext(theme.golden);
export const DefaultThemeContext = React.createContext(theme.default)
export const LocaleContext = React.createContext(locale.rainbow);
