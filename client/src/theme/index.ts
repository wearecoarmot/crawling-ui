import baseStyled, { ThemedStyledInterface } from 'styled-components';

export type Theme = {
  body: string;
  text: string;
};

export const lightTheme: Theme = {
  text: '#000',
  body: 'linear-gradient(193.26deg, #D3F0C5 13.54%, rgba(255, 255, 255, 0) 87.5%), #C3DBF0;',
};

export const darkTheme: Theme = {
  text: '#FFF',
  body: 'linear-gradient(193.26deg, #020054 13.54%, rgba(51, 51, 51, 0) 87.49%, rgba(85, 85, 85, 0) 87.5%), #000000',
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
