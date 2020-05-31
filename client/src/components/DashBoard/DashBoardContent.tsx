import React, { FC } from 'react';
import BoardTitle from './BoardTitle';
import BoardContent from './BoardContent';
import DefaultBoardContent from './DefaultBoardContent';
import { StyledDashBoard } from './styled';

type DashBoardType = {
  data?: any; // TODO: type 정해주기
};

// TODO: data api call 하기
const DashBoardContent: FC<DashBoardType> = ({ data }) => (
  <StyledDashBoard>
    <BoardTitle />
    {data ? <BoardContent /> : <DefaultBoardContent />}
  </StyledDashBoard>
);

export default DashBoardContent;
