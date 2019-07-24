import * as React from 'react';

import TimeTableComponent from 'components/timetable';
import styled from 'styled-components';

const Template = styled.div`
  width: 100%;
  height: 100%;
`;

const TimeTablePage: React.FC = () => {
  return (
    <Template>
      <TimeTableComponent />
    </Template>
  );
};

export default TimeTablePage;
