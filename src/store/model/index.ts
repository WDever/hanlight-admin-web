import { CalendarModel } from './calendar.model';
import { UserModel } from './user.model';

export interface AppState {
  user: UserModel;
  calendar: CalendarModel;
}

export * from './user.model';
export * from './calendar.model';
export * from './common.model';
