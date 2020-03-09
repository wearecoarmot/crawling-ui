import styled from '~/lib/styled';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: ${({ theme }) => theme.footerColor};
`;
