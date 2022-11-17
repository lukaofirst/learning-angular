import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubs!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.observableSubs = interval(1000).subscribe((count) => {
    //   // it starts in 0
    //   console.log(count);
    // });

    const customIntervalObser = new Observable((observer: Observer<number>) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater 3'));
        }
        count++;
      }, 1000);
    });

    this.observableSubs = customIntervalObser
      .pipe(map((data: number) => `Round ${data + 1}`))
      .subscribe(
        (data: string) => {
          console.log(data);
        },
        (err: Error) => {
          console.log(err);
          alert(err.message);
        },
        () => {
          console.log('Observable completed');
        }
      );
  }

  ngOnDestroy(): void {
    this.observableSubs.unsubscribe();
  }
}
