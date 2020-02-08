import DashBoard from './pages/DashBoard';
import CrawlingSettings from './pages/Settings/CrawlingSettings';
import DatabaseSettings from './pages/Settings/DatabaseSettings';

type RoutesArguments = {
  path: string;
  component: any;
  exact?: boolean;
};

const routes: Array<RoutesArguments> = [
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
