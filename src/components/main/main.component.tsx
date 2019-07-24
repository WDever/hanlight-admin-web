import * as React from 'react';

import HanseithonPage from 'pages/hanseithon';
import NavigationPage from 'pages/navigation';
import TimeTablePage from 'pages/timetable';
import { useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { AppState, status, userActions } from 'store';
import styled from 'styled-components';
import CheckInPage from 'pages/hanseithon/checkIn';

const { useEffect } = React;

const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainComponent: React.FC = () => {
  const loginStatus = useSelector<AppState, status>(
    state => state.user.loginStatus,
  );
  const getUserStatus = useSelector<AppState, status>(({ user }) => user.getUserStatus);

  return (
    <>
      <NavigationPage />
      {loginStatus === 'success' || getUserStatus === 'success' ? (
        <Switch>
      <Route exact={true} path="/hanseithon/checkin" component={CheckInPage} />
          <Route exact={true} path="/hanseithon" component={HanseithonPage} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainComponent;
