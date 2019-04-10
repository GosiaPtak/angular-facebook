import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from 'src/app/shared/interfaces/users.interface';
import { PostsResponse } from 'src/app/posts/interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<PostsResponse>(environment.postsUrl).pipe(
      map(res => res.posts),
      map(posts => {
        const users = posts.map(post => {
          return post.author;
        });
        //console.log(users);
        return users;
      }),
    );
  }

  getUserById(userId: string) {
    return this.getUsers().pipe(
      map(users => {
        return users.find(user => {
          return user.id === userId;
        });
      }),
    );
  }
}
