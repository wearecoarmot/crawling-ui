import styled, { createGlobalStyle } from 'styled-components';
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
    font-family: 'Noto Sans', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const PageTemplate = styled.article`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const PageContent = styled.main`
  flex-grow: 1;
  width: 100%;
  padding: 0 80px;
  overflow: auto;
`;
