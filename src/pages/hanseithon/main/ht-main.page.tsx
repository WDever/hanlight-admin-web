import HTMainComponent from 'components/hanseithon/main';
import * as React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  width: 100%;
  height: 100%;
`;

const HTMainPage: React.FC = () => {
  return (
    <Template>
      <HTMainComponent />
    </Template>
  );
};

export default HTMainPage;
