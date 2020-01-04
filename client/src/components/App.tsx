import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import useDarkMode, { Theme, ToggleTheme } from '~/hooks/useDarkMode';

import { ThemeProvider } from '~/lib/styled';
import { darkTheme, lightTheme } from '~/theme';

import i18n from '~/lang/i18n';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

import { GlobalStyled, PageTemplate } from './styled';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */'~/pages/Home'));

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <Loading />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={themeMode}>
        <PageTemplate>
          <Suspense fallback={<Loading />}>
            <Helmet>
              <title>crawling-ui</title>
              <meta name="description" content="The purpose of this project is automate crawling." />
            </Helmet>

            <Header theme={theme as Theme} toggleTheme={toggleTheme as ToggleTheme} />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </Suspense>
          <GlobalStyled />
        </PageTemplate>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
