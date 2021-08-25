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
    name: 'Transactions',
    path: '/transaction',
    component: PageTransaction
  },
  {
    name: 'SVG check',
    path: '/svg-check',
    component: PageSvgCheck
  },
  {
    name: 'Not found',
    path: '*',
    component: PageNotFound
  }
];

export default routes;
