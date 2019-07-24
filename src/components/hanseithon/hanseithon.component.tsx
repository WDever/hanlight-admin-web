import * as React from 'react';

import CheckInPage from 'pages/hanseithon/checkIn';
import HTMainPage from 'pages/hanseithon/main';
import { Redirect, Route, Switch } from 'react-router-dom';

const HanseithonComponent: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/hanseithon" component={HTMainPage} />
      <Redirect to="/hanseithon" />
    </Switch>
  );
};

export default HanseithonComponent;
