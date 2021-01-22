import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Shipment from './Shipment';
import NotFound from './NotFound';

function AppRoutes({ routes }) {
  return (
    <Switch>
      <Route path={routes.root} component={Shipment} exact />
      <Route path={routes.shipment} component={Shipment} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRoutes;