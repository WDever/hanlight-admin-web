import { instance } from 'lib/baseUrl';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  Login,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LoginParam,
} from '../action';

const loginApi = (data: LoginParam) =>
  instance
    .post('/api/user/login', {
      id: data.id,
      password: data.password,
    })
    .then(res => res.data);

function* loginApiSaga(action: Login) {
  if (action.type) {
    try {
      const response = yield call(loginApi, action.payload);
      console.log(response);
      yield put({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (e) {
      yield put({
        type: LOGIN_FAILURE, payload: e.response,
      });
    }
  }
}

function* userSaga() {
  yield takeEvery(LOGIN, loginApiSaga);
};

export { userSaga };
