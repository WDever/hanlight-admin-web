import { combineReducers } from 'redux';
import { calendarReducer } from './calendar.reducer';
import { errorReducer } from './error.reducer';
import { timeTableReducer } from './timeTable.reducer';
import { userReducer } from './user.reducer';

const reducer = combineReducers({
  user: userReducer,
  calendar: calendarReducer,
  timetable: timeTableReducer,
  error: errorReducer,
});

export { reducer };
