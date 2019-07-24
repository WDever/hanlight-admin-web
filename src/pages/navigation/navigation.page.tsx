import * as React from 'react';

import NavigationComponent from 'components/navigation';
import styled from 'styled-components';

const Template = styled.div`
  width: 20%;
  height: 100%;

  position: absolute;
`;

const NavigationPage: React.FC = () => {
  return (
    <Template>
      <NavigationComponent />
    </Template>
  );
};

export default NavigationPage;
