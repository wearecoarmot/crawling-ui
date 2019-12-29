import React, { lazy, MouseEventHandler, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import useDarkMode from '~/hooks/useDarkMode';

import { ThemeProvider } from '~/lib/styled';
import { darkTheme, lightTheme } from '~/theme';

import { GlobalStyled, PageTemplate } from './styled';
import Loading from './Loading';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */'~/pages/Home'));

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <PageTemplate>
        <Suspense fallback={<Loading />}>
          <Helmet>
            <title>crawling-ui</title>
            <meta name="description" content="The purpose of this project is automate crawling." />
          </Helmet>
          <button onClick={(toggleTheme as MouseEventHandler)}>{theme} mode</button>

          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
        <GlobalStyled />
      </PageTemplate>
    </ThemeProvider>
  );
};

export default App;
