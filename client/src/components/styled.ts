import styled, { createGlobalStyle } from '~/lib/styled';
import { reset } from 'styled-reset';

export const GlobalStyled = createGlobalStyle`
  ${reset};
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const PageTemplate = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
