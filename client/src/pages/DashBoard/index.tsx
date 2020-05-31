import React, { FC, useState } from 'react';

import { PageWrap } from '~/pages/styled';
import DashBoardContent from '~/components/DashBoard/DashBoardContent';

const DashBoard: FC = () => (
  <PageWrap>
    <DashBoardContent />
  </PageWrap>
);

export default DashBoard;
