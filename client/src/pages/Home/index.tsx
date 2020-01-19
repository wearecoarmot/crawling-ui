import React from 'react';
import { useTranslation } from 'react-i18next';

import Translate from '~/components/Translate';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Crawling-ui</h1>
      <div>{t('message.hello')}</div>
      <div>{t('n.selected', { n: 1 })}</div>
      <Translate />
    </div>
  );
};

export default HomeComponent;
