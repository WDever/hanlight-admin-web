import { status } from 'store';

export interface UserModel {
  id: string;
  signKey: string;
  accessToken: string;
  type: 'none' | 'student' | 'teacher' | 'graduate' | 'parent';
  admin: number;
  name: string;
  major: string | null;
  grade: number | null;
  classNum: number | null;
  studentNum: number | null;

  loginStatus: status;
}
