import * as React from 'react';

import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);
`;

const NavBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Items = styled(NavLink)<{ active: boolean }>`
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

  ${props =>
    props.active
      ? css`
          font-weight: bold;
          color: #4470ff;
        `
      : ''}
`;

const activeStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: '#4470ff',
};

// const activeStyle = css`
//   font-weight: bold;
//   color: #4470ff;
// `;

const NavigationComponent: React.FC = () => {
  return (
    <Wrapper>
      <NavBox>
        <Items active={false} to="/user/login" activeStyle={activeStyle}>
          로그인
        </Items>
        <Items active={false} to="/timetable" activeStyle={activeStyle}>
          시간표
        </Items>
        <Items active={false} to="/hanseithon" activeStyle={activeStyle}>
          한세톤
        </Items>
      </NavBox>
    </Wrapper>
  );
};

export default NavigationComponent;
