import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Login } from './Login';
import { Dashboard } from './Dashboard';

export const RootRouter: React.FC = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </Router>
);