import styled from '~/lib/styled';

export const SideContainer = styled.div`
  position: fixed;
  flex-direction: column;
`;

export const StyledLogo = styled.h1`
  color: #ffffff;
  margin: 20px;
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

export const SideMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 200px;
  min-width: 215px;
  height: 90%;
  color: #a4cbf0;
  font-size: 20px;
  border-right: 2px dashed #ffffff;
  line-height: 2;
  a {
    &:hover {
      color: #fff;
    }
  }
`;
