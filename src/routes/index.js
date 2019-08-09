import { Login, Dashboard } from '../pages';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/',
    component: Dashboard,
    exact: true,
    protected: true
  }
];

export default routes;
