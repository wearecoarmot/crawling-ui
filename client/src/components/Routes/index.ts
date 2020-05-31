import { lazy } from 'react';

const SignIn = lazy(() => import(/* webpackChunkName: "SignIn" */ '~/pages/SignIn'));

const DashBoard = lazy(() => import(/* webpackChunkName: "DashBoard" */ '~/pages/DashBoard'));
const CrawlingSettings = lazy(() =>
  import(/* webpackChunkName: "CrawlingSettings" */ '~/pages/Settings/CrawlingSettings'),
);
const DatabaseSettings = lazy(() =>
  import(/* webpackChunkName: "DatabaseSettings" */ '~/pages/Settings/DatabaseSettings'),
);

type RoutesArguments = {
  path: string;
  component: any;
  exact?: boolean;
};

export const UnAuthRoutes: RoutesArguments[] = [
  /* UnAuth-home */
  {
    path: '/',
    component: SignIn,
    exact: true,
  },

  /* login */
  {
    path: '/login',
    component: SignIn,
  },
];

export const AuthRoutes: RoutesArguments[] = [
  /* Auth-home */
  {
    path: '/',
    component: DashBoard,
    exact: true,
  },

  /* dashboard */
  {
    path: '/dashboard',
    component: DashBoard,
  },

  /* settings */
  {
    path: '/crawling/settings',
    component: CrawlingSettings,
  },
  {
    path: '/database/settings',
    component: DatabaseSettings,
  },
];
