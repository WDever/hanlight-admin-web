import { CalendarModel } from './calendar.model';
import { ErrorModel } from './error.model';
import { TimeTableModel } from './timeTable.model';
import { UserModel } from './user.model';

export interface AppState {
  user: UserModel;
  calendar: CalendarModel;
  timetable: TimeTableModel;
  error: ErrorModel
}

export * from './user.model';
export * from './calendar.model';
export * from './timeTable.model';
export * from './error.model';

export * from './common.model';
