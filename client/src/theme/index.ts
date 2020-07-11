import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  text: '#000',
  body: 'linear-gradient(193.26deg, #D3F0C5 13.54%, rgba(255, 255, 255, 0) 87.5%), #C3DBF0;',
  linkColor: '#A4CBF0',
  footerColor: '#FFF',
  signBack: '#E7F5F8',
  inputBack: '#D7ECE2',
  titleColor: '#666',
  placeholder: '#B2D1C2',
  topGradient: 'linear-gradient(180deg, rgba(212, 240, 201, 1) 50%, rgba(0, 0, 0, 0) 100%)',
  dashBoard: {
    titleBackGroundColor: '#ccc',
    titleColor: '#999',
    defaultContentBackGroundColor: '#fff',
    defaultContentFontColor: '#aaa',
  },
};

export const darkTheme: DefaultTheme = {
  text: '#FFF',
  body: 'linear-gradient(193.26deg, #020054 13.54%, rgba(51, 51, 51, 0) 87.49%, rgba(85, 85, 85, 0) 87.5%), #000000',
  linkColor: '#444',
  footerColor: '#999',
  signBack: '#54536F',
  inputBack: '#9997B6',
  titleColor: '#222',
  placeholder: '#555555',
  topGradient: 'linear-gradient(180deg, #020054 50%, rgba(0,0,0,0) 100%)',
  dashBoard: {
    titleBackGroundColor: '#393e46',
    titleColor: '#999',
    defaultContentBackGroundColor: '#999',
    defaultContentFontColor: '#555',
  },
};
