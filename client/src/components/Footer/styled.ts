import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-top: auto;
  color: ${({ theme }) => theme.footerColor};
`;
