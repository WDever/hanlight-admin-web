import React from 'react';

import CalendarComponent from 'components/calendar';
import MainComponent from 'components/main';
import { Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/calendar" component={CalendarComponent} />
      <Route path="/" component={MainComponent} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
