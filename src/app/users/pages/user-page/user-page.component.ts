import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../service/users.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: User = null;
  error = null;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setupUser();
  }
  private setupUser = () => {
    const userId = this.route.snapshot.params.userId;
    this.usersService.getUserById(userId).subscribe({
      next: response => {
        this.user = response;
      },
      error: err => {
        this.error = err;
        console.log(err);
      }
    });
  }
}
