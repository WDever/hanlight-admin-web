import * as React from 'react';

import { useInputs } from 'lib/hooks';

interface LoginState {
  id: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const [inputs, setInputs] = useInputs<LoginState>({ id: '', password: '' });

  const { id, password } = inputs;

  return (
    <form>
      <input type="text" value={id} onChange={setInputs} />
      <input type="password" value={password} onChange={setInputs} />
      <button>로그인</button>
    </form>
  );
};

export default LoginComponent;
