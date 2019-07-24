import * as React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const BtnsWrapper = styled.div`
  width: 90%;
  max-width: 81rem;

  display: flex;
  flex-wrap: wrap;

  margin-top: 30%;

  div {
    width: 49%;
    height: 8rem;

    border: 1px solid #000000;

    font-size: 1.375rem;
    font-family: 'Spoqa Han Sans';

    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

const HTMainComponent: React.FC = () => {
  return (
    <Wrapper>
      {/* <BtnsWrapper>
        <div>체크 인</div>
        <div>체크 아웃</div>
        <div>체크 아웃 리스트</div>
        <div>점수 집계</div>
      </BtnsWrapper> */}
    </Wrapper>
  );
};

export default HTMainComponent;
