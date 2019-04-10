import { User } from './user.interface';

export interface Users extends Array<User> {
    id: string;
    name: string;
    avatar_url: string;
}
