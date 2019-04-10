import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import Ajv from 'ajv';
import * as SCHEME from '../../../schemas/posts.schema.json';

function fakePosts() {
  return {
    id: '',
    created_time: '',
    author: '',
    body: '',
    images: '',
  };
}

describe('PostsService', () => {
  let service: PostsService = null;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(PostsService);
  });

  it('should be created', () => {
    // const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });

  it('should returns list of posts', () => {
    service.getPosts().subscribe({
      next: response => {
        expect(response.posts.length).toEqual(2);
      },
    });
    const httpMock = TestBed.get(HttpTestingController);
    httpMock.expectOne(environment.postsUrl).flush([1, 2]);
  });

  it('should returns response in valid format (use schema)', () => {
    const ajv = new Ajv();
    const validator = ajv.compile(SCHEME);

    service.getPosts().subscribe({
      next: response => {
        const isValid = validator(response);
        expect(isValid).toEqual(true);
        console.log(validator.errors);
      },
    });

    const httpMock = TestBed.get(HttpTestingController);

    httpMock.expectOne(environment.postsUrl).flush({
      posts: [1, 2, 3, 4, 5],
    });
  });
});
