import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import store from './config/configStore';
import routes from './routes';

import ProtectedRoute from './components/common/protectedRoute';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ToastContainer />
        <Switch>
          {routes.map(route => {
            const RenderedRoute = route.protected ? ProtectedRoute : Route;
            return <RenderedRoute key={route.path} {...route} />;
          })}
          <Route component={() => <h6>Not found</h6>} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
