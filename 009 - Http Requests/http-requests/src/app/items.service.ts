import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  itemsSubject = new Subject<Item[]>();
  errorServiceSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http
      .get<Item[]>('http://localhost:3000/items')
      .subscribe((responseData) => {
        this.itemsSubject.next(responseData);
      });
  }

  postItem(item: Item) {
    this.http.post<Item>('http://localhost:3000/items', item).subscribe({
      next: () => {
        this.getItems();
      },
      error: (err) => this.errorServiceSubject.next(err.message),
    });
    this.getItems();
  }

  deleteItem(id: number) {
    // this.http.delete(`http://localhost:3000/items/${id}`)
    //	.subscribe({ error: (err) => this.errorServiceSub.next(err.message) });

    this.http.delete(`http://localhost:3000/items/${id}`).subscribe({
      next: () => {
        this.getItems();
      },
      error: (err) => this.errorServiceSubject.next(err.message),
    });
  }
}
