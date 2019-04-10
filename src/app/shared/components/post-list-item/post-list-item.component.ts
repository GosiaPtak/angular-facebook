import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //tylko wtedy kiedy wprowadzane sa dane
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = null;
  @Input() user: User = null;

  constructor() {}

  ngOnInit() {}

  getUserLink() {
    return  `/users/${ this.post.author.id }`;
  }

  getPostLink() {
    return  `/posts/${ this.post.id }`;
  }
}
