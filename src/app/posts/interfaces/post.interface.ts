import { Posts } from './posts.interface';

export interface Post {
  id: string;
  created_time: string;
  author: Author;
  body: string;
  images: string[];
}

interface Author {
  id: string;
  name: string;
  avatar_url: string;
}
