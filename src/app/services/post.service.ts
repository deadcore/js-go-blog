import {Http, Response, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {Post} from '../models/post';

@Injectable()
export class PostService {


  constructor(private http: Http) {
  }

  findAll(pageNumber: number): Observable<Post[]> {
    return this.http.get(`${AppConfig.apiBaseUrl}/posts`)
      .map((res: Response) => res.json());
  }

  get(id: string): Observable<Post> {
    return this.http.get(`${AppConfig.apiBaseUrl}/posts/${id}`)
      .map((res: Response) => res.json());
  }
}
