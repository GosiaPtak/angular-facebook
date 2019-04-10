import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../service/users.service';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  user: User = null;
  error = null;

  destroy$ = new Subject(); // $ na koncu  kiedy strumien
  user$: Observable<User> = null;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setupUser();
  }

  ngOnDestroy(): void {
this.destroy$.next(null);

  }
  private setupUser = () => {
    const userId = this.route.snapshot.params.userId;
    this.usersService.getUserById(userId).
    pipe (
      takeUntil(this.destroy$)
    ).subscribe({
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
