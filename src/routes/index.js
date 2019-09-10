import {
  Login,
  Dashboard,
  ExtranetProperty,
  ExtranetAccomodation,
  ExtraNetBedConfiguration
} from '../pages';

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
  },
  {
    path: '/extranet/property-types',
    component: ExtranetProperty,
    exact: true,
    protected: true,
    isAdmin: true
  },
  {
    path: '/extranet/accomodation',
    component: ExtranetAccomodation,
    exact: true,
    protected: true,
    isAdmin: true
  },
  {
    path: '/extranet/bed-configuration',
    component: ExtraNetBedConfiguration,
    exact: true,
    protected: true,
    isAdmin: true
  }
];

export default routes;
