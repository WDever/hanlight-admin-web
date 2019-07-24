import * as React from 'react';

import QrReader from 'react-qr-reader';
import styled from 'styled-components';

const { useState, useEffect } = React;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

const ReaderWrapper = styled.div`
  width: 50%;

  margin-top: 10%;

  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
`;

const CheckInComponent: React.FC = () => {
  const [qrData, setQrData] = useState<string | null>('');

  const handleError = (err: string) => {
    console.log(err);
  };

  const handleScan = (data: string | null) => {
    setQrData(data);

    console.log(qrData);
  };

  return (
    <Wrapper>
      <ReaderWrapper>
        <QrReader delay={300} onError={handleError} onScan={handleScan} />
      </ReaderWrapper>
    </Wrapper>
  );
};

export default CheckInComponent;
