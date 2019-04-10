import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../../shared/interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post: Post = null;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.setupPost();
  }
  private setupPost = () => {
    const postId = this.route.snapshot.params.postId;
    this.postsService.getPostsById(postId).subscribe({
      next: response => {
        this.post = response;

        console.log(response);
      },
      error: err => {
        console.log(err);
      }
    });
  };
}
