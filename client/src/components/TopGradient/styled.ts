import styled from 'styled-components';

export const StyledTopGradient = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.topGradient};
  z-index: 1;
`;
