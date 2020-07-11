import styled from 'styled-components';

export const StyledDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledBoardTitle = styled.div`
  display: flex;
  margin-top: 100px;

  div {
    width: 300px;
    padding: 11px 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${({ theme }) => theme.dashBoard.titleBackGroundColor};
    color: ${({ theme }) => theme.dashBoard.titleColor};
    font-weight: bold;
    font-size: 14px;

    &:first-child {
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

export const StyledDefaultBoardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 27px 0;
  background-color: ${({ theme }) => theme.dashBoard.defaultContentBackGroundColor};
  color: ${({ theme }) => theme.dashBoard.defaultContentFontColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
