import baseStyled, { ThemedStyledInterface } from 'styled-components';

export type Theme = {
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
};

export const lightTheme: Theme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme: Theme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
