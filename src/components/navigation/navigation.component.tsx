import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState, status, userActions } from 'store';
import styled, { css } from 'styled-components';

const { useCallback, useState } = React;

const { resetUser } = userActions;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);
`;

const NavBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Items = styled(NavLink)`
  width: calc(100% - 1rem);
  height: 2.25rem;

  font-family: 'Spoqa Han Sans';
  font-size: 0.875rem;
  color: #000000;

  text-decoration: none;

  display: flex;
  align-items: center;

  padding-left: 1rem;

  :hover {
    color: #4470ff;
  }
`;

const LogoutItem = styled.div`
  width: calc(100% - 1rem);
  height: 2.25rem;

  font-family: 'Spoqa Han Sans';
  font-size: 0.875rem;
  color: #000000;

  text-decoration: none;

  display: flex;
  align-items: center;

  padding-left: 1rem;

  cursor: pointer;

  :hover {
    color: #4470ff;
  }
`;

const InnerNav = styled.div`
  width: 100%;

  background-color: #f9f9f9;

  div {
    padding-left: 2rem;
  }
`;

const activeStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: '#4470ff',
};

type toggleStatus = 'none' | 'hanseithon';

const NavigationComponent: React.FC = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector<AppState, status>(
    ({ user }) => user.loginStatus,
  );

  const [toggle, setToggle] = useState<toggleStatus>('none');

  const logout = useCallback(() => dispatch(resetUser()), []);

  const hanseithonFunc = () => toggle === 'hanseithon' ? setToggle('none') : setToggle('hanseithon');

  return (
    <Wrapper>
      <NavBox>
        {loginStatus !== 'success' ? (
          <Items to="/user/login" activeStyle={activeStyle}>
            로그인
          </Items>
        ) : (
          <LogoutItem onClick={logout}>로그아웃</LogoutItem>
        )}
        {/* <Items active={false} to="/timetable" activeStyle={activeStyle}>
          시간표
        </Items> */}
        <Items
          to="/hanseithon"
          activeStyle={activeStyle}
          onClick={hanseithonFunc}
        >
          한세톤
        </Items>
        {toggle === 'hanseithon' && (
          <InnerNav>
            <Items to="/hanseithon/checkin" activeStyle={activeStyle}>
              체크 인
            </Items>
            <Items to="/hanseithon/checkout" activeStyle={activeStyle}>
              체크 아웃
            </Items>
            <Items to="/hanseithon/checkout/list" activeStyle={activeStyle}>
              체크 아웃 리스트
            </Items>
            <Items to="/hanseithon/score" activeStyle={activeStyle}>
              점수 집계
            </Items>
          </InnerNav>
        )}
      </NavBox>
    </Wrapper>
  );
};

export default NavigationComponent;
