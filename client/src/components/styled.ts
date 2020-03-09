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

export const PageContent = styled.div`
  width: 100%;
  overflow: auto;
`;
