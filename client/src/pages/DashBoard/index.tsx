import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrap } from '~/pages/styled';
import DashBoardContent from '~/components/DashBoard/DashBoardContent';
import { Helmet } from 'react-helmet';

const DashBoard: FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrap>
      <Helmet>
        <title>{t('title.dashboard')} - Crawling-ui</title>
      </Helmet>

      <DashBoardContent />
    </PageWrap>
  );
};

export default DashBoard;
