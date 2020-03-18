import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrap } from '../styled';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrap>
      <h1>Crawling-ui</h1>
      <div>{t('message.hello')}</div>
      <div>{t('n.selected', { n: 1 })}</div>
    </PageWrap>
  );
};

export default HomeComponent;
