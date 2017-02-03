import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Post} from '../models/post';
import {environment} from '../../environments/environment';

@Injectable()
export class PostService {

  private locationExtractor: RegExp = /^\/post\/(.*)$/g;

  constructor(private http: Http) {
  }

  findAll(pageNumber: number): Observable<Post[]> {
    return this.http.get(`${environment.apiBaseUrl}/posts`)
      .map((res: Response) => res.json());
  }

  get(id: string): Observable<Post> {
    return this.http.get(`${environment.apiBaseUrl}/posts/${id}`)
      .map((res: Response) => res.json());
  }

  post(post: Post): Observable<string> {
    return this.http.post(`${environment.apiBaseUrl}/posts`, post)
      .map((res: Response) => {
        const headers = res.headers;
        const location = headers.get('Location');
        const broken = this.locationExtractor.exec(location);
        return broken[1]
      });
  }

  patch(id: String, post: Post): Observable<string> {
    return this.http.patch(`${environment.apiBaseUrl}/posts/${id}`, post)
      .map((res: Response) => {
        return post.Id
      });
  }

  delete(post: Post) {
    return this.http.delete(`${AppConfig.apiBaseUrl}/posts/${post.Id}`);
  }
}
