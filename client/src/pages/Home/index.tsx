import React from 'react';
import { useTranslation } from 'react-i18next';

import Translate from '~/components/Translate';
import { PageContent } from '../styled';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContent>
      <h1>Crawling-ui</h1>
      <div>{t('message.hello')}</div>
      <div>{t('n.selected', { n: 1 })}</div>
      <Translate />
    </PageContent>
  );
};

export default HomeComponent;
