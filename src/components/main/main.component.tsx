import * as React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MainComponent: React.FC = () => {
  return (
    <LinkWrapper>
      <Link to="/calendar">시간표</Link>
    </LinkWrapper>
  );
};

export default MainComponent;
