import styled from '~/lib/styled';

export const StyledTopGradient = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.topGradient};
  z-index: 1;
`;
