import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  activatedSubjectSubsc!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubjectSubsc = this.userService.activatedSubject.subscribe(
      (data) => {
        this.userActivated = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSubjectSubsc.unsubscribe();
  }
}
