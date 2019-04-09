import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResponse } from '../interfaces/responses/posts-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostsResponse>('/assets/posts.json'); //src/assets/posts.json 
  }
}
