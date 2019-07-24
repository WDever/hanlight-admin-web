import { all } from 'redux-saga/effects';
import { calendarSaga } from './calendar.saga';
import { errorSaga } from './error.saga';
import { timeTableSaga } from './timeTable.saga';
import { userSaga } from './user.saga';

function* rootSaga() {
  yield all([userSaga(), calendarSaga(), timeTableSaga(), errorSaga()]);
}

export { rootSaga };
