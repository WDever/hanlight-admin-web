import React from 'react';

import MainComponent from 'components/main';
import LoginComponent from 'components/user/login';
import { Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/user/login" component={LoginComponent} />
      <Route path="/" component={MainComponent} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
