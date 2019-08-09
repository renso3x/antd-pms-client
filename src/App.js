import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/common/protectedRoute';
import routes from './routes';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
