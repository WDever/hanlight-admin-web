import { all } from 'redux-saga/effects';
import { calendarSaga } from './calendar.saga';
import { userSaga } from './user.saga';

function* rootSaga() {
  yield all([userSaga(), calendarSaga()]);
}

export { rootSaga };
