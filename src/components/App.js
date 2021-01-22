import React from 'react';
import { NotificationContainer } from 'react-notifications';
import ROUTES from './../constants/routes';
import AppRoutes from './../pages';
import './../styles/index.scss';

function App() {
  return (
    <div className="App">
      <AppRoutes routes={ROUTES} />
      <NotificationContainer />
    </div>
  );
}

export default App;
