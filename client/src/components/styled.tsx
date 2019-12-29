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
    background: ${({ theme, }) => theme.body};
    color: ${({ theme, }) => theme.text};
  }
`;

export const PageTemplate = styled.article`
  display: flex;
`;

