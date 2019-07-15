import * as React from 'react';

import { useInputs } from 'lib/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppState, LOGIN, status } from 'store';
import styled from 'styled-components';

const { useCallback, useEffect } = React;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 10%;
  }

  button {
    width: 5%;
  }
`;

interface LoginState {
  id: string;
  password: string;
}

const LoginComponent: React.FC<RouteComponentProps> = ({
  history,
  location,
  match,
}) => {
  const [inputs, setInputs] = useInputs<LoginState>({ id: '', password: '' });
  const loginStatus = useSelector<AppState, status>(
    state => state.user.loginStatus,
  );
  const dispatch = useDispatch();

  const { id, password } = inputs;

  const submitLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: LOGIN, payload: { id, password } });
    },
    [dispatch, id, password],
  );

  useEffect(() => {
    if (loginStatus === 'success') {
      history.push('/');
    } else if (loginStatus === 'failure') {
      alert('아이디와 비밀번호를 확인하여 주십시오.');
    }
  }, [loginStatus, history]);

  return (
    <Form onSubmit={submitLogin}>
      <input type="text" value={id} onChange={setInputs} name="id" />
      <input
        type="password"
        value={password}
        onChange={setInputs}
        name="password"
      />
      <button>로그인</button>
    </Form>
  );
};

export default LoginComponent;
