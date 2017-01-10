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

@Injectable()
class AuthHttp extends Http {

  constructor(private backend: ConnectionBackend,
              private defaultOptions: RequestOptions,
              private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, this.appendAuthHeaders(options)));
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
    return this.intercept(super.delete(url, options));
  }

  appendAuthHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    let token = '';
    options.headers.append('Content-Type', 'application/json');
    if (token) {
      options.headers.append('X-Session-Token', token);
    }
    return options;
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

export function AuthHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) {
  return new AuthHttp(xhrBackend, requestOptions, router);
}


export const AuthHttpProvider = {
  provide: Http,
  useFactory: AuthHttpFactory,
  deps: [XHRBackend, RequestOptions, Router]
};
