import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeComponent: React.FC = () => {
  const { t, i18n, } = useTranslation();

  return (
    <div>
      <h1>Crawling-ui</h1>
      <div>{t('message.hello')}</div>
      <div>{t('n.selected', { n: 1, })}</div>

      <button onClick={() => i18n.changeLanguage('ko')}>KO</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
};

export default HomeComponent;
