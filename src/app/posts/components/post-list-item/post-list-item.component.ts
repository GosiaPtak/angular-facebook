import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //tylko wtedy kiedy wprowadzane sa dane
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;
  author: any;

  constructor() {}

  ngOnInit() {}
  getAuthorLink() {
    return  `/author/${ this.post.author.id }`;
  }

  getPostLink() {
    return  `/post/${ this.post.id }`;
  }
}
