import React, { Suspense, useCallback, useLayoutEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import useDarkMode, { Theme, ToggleTheme } from '~/hooks/useDarkMode';
import useAuthUser from '~/hooks/useAuthUser';

import { iRootDispatch } from '~/lib/store';
import { darkTheme, lightTheme } from '~/theme';

import i18n from '~/lang/i18n';

import { UnAuthRoutes, AuthRoutes } from './Routes';

import SideOption from './SideOption';
import Loading from './Loading';
import SideMenu from './SideMenu';
import TopGradient from './TopGradient/TopGradient';

import { GlobalStyled, PageTemplate, PageContent } from './styled';

const App = () => {
  const dispatch = useDispatch<iRootDispatch>();
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const isAuth = useAuthUser();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // @TODO 정보 확인 하는거 나오면 수정할 부분
  useLayoutEffect(() => {
    !!localStorage.getItem('auth') && dispatch.user.changeUser({ isLogged: true });
  }, [dispatch.user]);

  const Routes = useCallback(() => {
    return (isAuth ? AuthRoutes : UnAuthRoutes).map((route) => (
      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
    ));
  }, [isAuth]);

  if (!componentMounted) {
    return <Loading />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={themeMode}>
        <PageTemplate>
          <Suspense fallback={<Loading />}>
            <SideMenu isAuth={isAuth} />
            <PageContent>
              <TopGradient />
              <Switch>
                {Routes()}
                <Redirect to="/" />
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
