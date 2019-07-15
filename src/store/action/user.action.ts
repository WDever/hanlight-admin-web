import { Action } from 'redux';
import { createStandardAction } from 'typesafe-actions';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LoginParam {
  id: string;
  password: string;
}

export class Login implements Action {
  public readonly type = LOGIN;

  public constructor(public payload: LoginParam) {}
}

export class LoginSuccess implements Action {
  public readonly type = LOGIN_SUCCESS;

  public constructor(
    public payload: {
      accessToken: string;
      user: {
        id: string;
        type: 'none' | 'student' | 'teacher' | 'graduate' | 'parent';
        admin: number;
        name: string;
        major: string | null;
        grade: number | null;
        classNum: number | null;
        studentNum: number | null;
      };
    },
  ) {}
}

export class LoginFailure implements Action {
  public readonly type = LOGIN_FAILURE;
}

export const userActions = {
  login: createStandardAction(LOGIN)<LoginParam>(),
};

export type userReducerActions = Login | LoginSuccess | LoginFailure;
