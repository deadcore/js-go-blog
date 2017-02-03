import {
  Http,
  Request,
  RequestOptionsArgs,
  Response,
  RequestOptions,
  ConnectionBackend,
  Headers, XHRBackend
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';

@Injectable()
class AuthHttp extends Http {

  constructor(private backend: ConnectionBackend,
              private defaultOptions: RequestOptions,
              private router: Router,
              private localStorageService: LocalStorageService) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, this.appendAuthHeaders(options)));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, this.appendAuthHeaders(options)));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, this.appendAuthHeaders(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.delete(url, this.appendAuthHeaders(options)));
  }

  patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.patch(url, body, this.appendAuthHeaders(options)));
  }

  appendAuthHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    let token = this.getSessionToken();
    options.headers.append('Content-Type', 'application/json');
    if (token) {
      options.headers.append('x-session-token', token);
    }
    return options;
  }

  private getSessionToken() {
    const session = this.localStorageService.getSession();

    return session ? session.Token : null;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
        return Observable.empty();
      }
      return Observable.throw(err);
    });

  }
}

export function AuthHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, localStorageService: LocalStorageService) {
  return new AuthHttp(xhrBackend, requestOptions, router, localStorageService);
}


export const AuthHttpProvider = {
  provide: Http,
  useFactory: AuthHttpFactory,
  deps: [XHRBackend, RequestOptions, Router, LocalStorageService]
};
