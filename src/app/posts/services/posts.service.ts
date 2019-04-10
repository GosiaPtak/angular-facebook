import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResponse } from '../interfaces/responses/posts-response.interface';

import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostsResponse>('/assets/posts.json');
  }

  getPostsById(postId: string): Observable<Post> {
    return this.getPosts().pipe(
      map(res => {
        return res.posts;
      }),
      map(posts => {
        return posts.filter(post => {
          return post.id === postId;
        });
      }),
      map(posts => posts[0])
    );
  }
}
