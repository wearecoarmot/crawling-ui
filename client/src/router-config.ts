import { lazy } from 'react';

const DashBoard = lazy(() => import(/* webpackChunkName: "DashBoard" */ './pages/DashBoard'));
const CrawlingSettings = lazy(() =>
  import(/* webpackChunkName: "CrawlingSettings" */ './pages/Settings/CrawlingSettings'),
);
const DatabaseSettings = lazy(() =>
  import(/* webpackChunkName: "DatabaseSettings" */ './pages/Settings/DatabaseSettings'),
);

type RoutesArguments = {
  path: string;
  component: any;
  exact?: boolean;
};

const routes: RoutesArguments[] = [
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

export default routes;
