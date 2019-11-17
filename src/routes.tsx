import { RouteConfig } from 'react-router-config';
import PageNotFound from 'components/page/not-found';
import PageHome from 'components/page/home';
import PageTransaction from 'components/page/transaction';
import PageSvgCheck from 'components/page/svg-check';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    exact: true,
    component: PageHome
  },
  {
    path: '/transaction',
    component: PageTransaction
  },
  {
    path: '/svg-check',
    component: PageSvgCheck
  },
  {
    path: '*',
    component: PageNotFound
  }
];

export default routes;
