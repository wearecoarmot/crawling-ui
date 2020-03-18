import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import useDarkMode, { Theme, ToggleTheme } from '~/hooks/useDarkMode';
import { ThemeProvider } from '~/lib/styled';
import { darkTheme, lightTheme } from '~/theme';
import i18n from '~/lang/i18n';

import routes from '../router-config';

import SideOption from './SideOption';
import Loading from './Loading';
import SideMenu from './SideMenu';

import { GlobalStyled, PageTemplate, PageContent } from './styled';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '~/pages/Home'));

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
            <SideMenu />
            <PageContent>
              <Switch>
                <Route path="/" component={Home} exact={true} />

                {routes.map((route) => (
                  <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                ))}
              </Switch>
            </PageContent>
            <SideOption theme={theme as Theme} toggleTheme={toggleTheme as ToggleTheme} />
          </Suspense>
          <GlobalStyled />
        </PageTemplate>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
