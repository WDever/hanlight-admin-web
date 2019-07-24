import * as React from 'react';

import CheckInComponent from 'components/hanseithon/check/checkIn';
import styled from 'styled-components';

const Template = styled.div`
  width: 80%;
  height: 100%;

  margin-left: 20%;
`;

const CheckInPage: React.FC = () => {
  return (
    <Template>
      <CheckInComponent />
    </Template>
  );
};

export default CheckInPage;
