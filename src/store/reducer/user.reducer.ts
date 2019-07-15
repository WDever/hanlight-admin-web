import { produce } from 'immer';
import { userReducerActions } from '../action';
import { UserModel } from '../model/user.model';

const initialState: UserModel = {
  signKey: '',
  id: '',
  accessToken: '',
  type: 'none',
  admin: 0,
  name: '',
  major: null,
  grade: null,
  classNum: null,
  studentNum: null,

  loginStatus: 'none',
};

export const userReducer = (
  state: UserModel = initialState,
  action: userReducerActions,
) =>
  produce(state, draft => {
    switch (action.type) {
      case 'LOGIN':
        draft.loginStatus = 'pending';
        break;

      case 'LOGIN_SUCCESS':
        draft.loginStatus = 'success';
        draft.accessToken = action.payload.accessToken;
        Object.assign(draft, {
          ...action.payload.user,
        });

        console.log(action.payload);
        localStorage.setItem('accessToken', action.payload.accessToken);
        break;

      case 'LOGIN_FAILURE':
        draft.loginStatus = 'failure';
        break;

      default:
        break;
    }
  });
