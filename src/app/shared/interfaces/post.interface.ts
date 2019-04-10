import { Users } from './users.interface';

export interface Post {
  id: string;
  created_time: string;
  author: Users;
  body: string;
  images: string[];
}
