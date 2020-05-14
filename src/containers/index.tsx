import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { PrivateRoute } from '../components/PrivateRoute';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { HotelSetup } from './HotelSetup';

export const RootRouter: React.FC = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />

      <PrivateRoute path="/hotel-setup" component={HotelSetup} />
      <PrivateRoute path="/" exact component={Dashboard} />
    </Switch>
  </Router>
);