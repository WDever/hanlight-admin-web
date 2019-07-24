import * as React from 'react';

import MainComponent from 'components/main';
import styled from 'styled-components';

const Template = styled.div`
  width: 100%;
  height: 100%;
`;

const MainPage: React.FC = () => {
  return (
    <Template>
      <MainComponent />
    </Template>
  );
};

export default MainPage;
