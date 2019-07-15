import * as React from 'react';

import CalendarComponent from 'components/calendar';
import { useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { AppState, status } from 'store';
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

  return (
    <>
      <Menu loginStatus={loginStatus} />
      {loginStatus === 'success' ? (
        <Switch>
          <Route exact={true} path="/calendar" component={CalendarComponent} />
        </Switch>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainComponent;
