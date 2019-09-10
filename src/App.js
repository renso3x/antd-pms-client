import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import ProtectedRoute from './components/common/protectedRoute';
import BedContextProvider from './context/bedConfig';

import store from './config/configStore';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BedContextProvider>
        <ToastContainer />
        <Switch>
          {routes.map(route => {
            const RenderedRoute = route.protected ? ProtectedRoute : Route;
            return <RenderedRoute key={route.path} {...route} />;
          })}
          <Route component={() => <h6>Not found</h6>} />
        </Switch>
      </BedContextProvider>
    </Provider>
  );
}

export default App;
