import { combineReducers } from 'redux';
import { calendarReducer } from './calendar.reducer';
import { userReducer } from './user.reducer';

const reducer = combineReducers({
  user: userReducer,
  calendar: calendarReducer,
});

export { reducer };
