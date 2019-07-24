import * as React from 'react';

import HanseithonPage from 'pages/hanseithon';
import NavigationPage from 'pages/navigation';
import TimeTablePage from 'pages/timetable';
import { useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { AppState, status, userActions } from 'store';
import styled from 'styled-components';

const { useEffect } = React;

const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Menu: React.FC<{ loginStatus: status }> = ({ loginStatus }) => {
  return (
    <LinkWrapper>
      {loginStatus !== 'success' && <Link to="/user/login">로그인</Link>}
      {loginStatus === 'success' && <Link to="/calendar">시간표</Link>}
    </LinkWrapper>
  );
};

const MainComponent: React.FC = () => {
  const loginStatus = useSelector<AppState, status>(
    state => state.user.loginStatus,
  );
  // const getUserStatus = useSelector<AppState, status>(({ user }) => user.getUserStatus);
  const getUserStatus = useSelector<AppState, status>(
    state => state.user.getUserStatus,
  );

  return (
    <>
      <NavigationPage />
      {loginStatus === 'success' || getUserStatus === 'success' ? (
        <Switch>
          <Route exact={true} path="/timetable" component={TimeTablePage} />
          <Route exact={true} path="/hanseithon" component={HanseithonPage} />
        </Switch>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainComponent;
