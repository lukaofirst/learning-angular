import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observer, Subject, tap } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('custom', 'key');
    searchParams = searchParams.append('example', 'param');

    return this.http
      .get<Post[]>('http://localhost:3000/posts', {
        params: searchParams,
      })
      .pipe(
        catchError((errorRes) => {
          throw errorRes;
        })
      );
  }

  createAndStorePost(postData: Post) {
    this.http
      .post<Post>('http://localhost:3000/posts', postData, {
        observe: 'response',
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe({
        next: (observer) => {
          console.log(observer);
        },
        error: (err) => {
          this.error.next(err.message);
        },
      });
  }

  deletePost(postId: number) {
    return this.http
      .delete(`http://localhost:3000/posts/${postId}`, {
        observe: 'events',
        responseType: 'text',
      })
      .pipe(
        tap((event) => {
          console.log(event);
        })
      );
  }
}
