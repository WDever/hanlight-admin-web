import * as React from 'react';

import HanseithonComponent from 'components/hanseithon';
import styled from 'styled-components';

const Template = styled.div`
  width: 80%;
  height: 100%;

  margin-left: 20%;
`;

const HanseithonPage: React.FC = () => {
  return (
    <Template>
      <HanseithonComponent />
    </Template>
  );
};

export default HanseithonPage;
