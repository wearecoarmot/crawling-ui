import React, { FC } from 'react';

import { PageWrap } from '~/pages/styled';
import DashBoardContent from '~/components/DashBoard/DashBoardContent';
import { Helmet } from 'react-helmet';

const DashBoard: FC = () => (
  <PageWrap>
    <Helmet>
      <title>대시보드 - Crawling-ui</title>
    </Helmet>

    <DashBoardContent />
  </PageWrap>
);

export default DashBoard;
