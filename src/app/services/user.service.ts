import {Injectable} from "@angular/core";
import {URLSearchParams, Http, Response} from "@angular/http";
import {User} from "models/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  find(query: string): Observable<User> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', query);
    return this.http.get(`${AppConfig.apiAuthBaseUrl}/admin/api/users`, { search: params })
      .map((res) => res.status === 204 ? null : res.json());
  }

  update(user: User): Observable<Response> {
    return this.http.put(`${AppConfig.apiAuthBaseUrl}/admin/api/users/${user.id}`, user);
  }
}
