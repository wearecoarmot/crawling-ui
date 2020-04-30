import styled from '~/lib/styled';

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-width: 215px;
`;

export const StyledLogo = styled.div.attrs({
  role: 'banner',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #ffffff;
  font-size: 0;
  font-weight: 700;
  text-shadow: 1px 1px 1px #b6b6b6;
  a {
    display: inline-flex;
    font-size: 19px;
    svg {
      margin-right: 5px;
    }
  }
`;

export const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: 30px;
  border-right: 2px dashed #ffffff;
`;

export const SideItem = styled.li`
  color: ${({ theme }) => theme.linkColor};
  font-size: 20px;
  line-height: 2;
  a {
    position: relative;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #5da2e3;
      &::before {
        position: absolute;
        top: 50%;
        left: -6px;
        transform: translate(-50%, -50%);
        content: '•';
      }
    }
  }
`;
