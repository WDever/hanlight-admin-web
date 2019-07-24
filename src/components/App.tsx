import React from 'react';

import AutoLoginComponent from 'components/auto/autoLogin';
import LoginComponent from 'components/user/login';
import MainPage from 'pages/main';
import { Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <AutoLoginComponent />
      <Switch>
        <Route exact={true} path="/user/login" component={LoginComponent} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
