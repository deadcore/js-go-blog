import {AuthEffects} from '../../../../app/store/auth/effects';
import {Actions} from '@ngrx/effects';
import {LogoutAction, LogoutSuccessAction} from '../../../../app/store/auth/actions';
import {AuthenticationService} from '../../../../app/services/authentication.service';
import {Router} from '@angular/router';
import {Session, UserSession} from '../../../../app/models/user-session';
import {UserSessionFixture} from '../../../fixtures/user-session.fixture';
import {Observable} from 'rxjs';
import * as UserSessionActions from 'actions/user-session';

describe('AuthEffects', () => {

  let router: Router;
  let authenticationService: AuthenticationService;
  let userFixture: UserSession = UserSessionFixture;

  beforeEach(() => {
    authenticationService = jasmine.createSpyObj('AuthenticationService', ['logout', 'login']);
    router = jasmine.createSpyObj('Router', ['navigate']);
  });

  it('should invoke the auth service logout function when a logout event is emited', done => {
    const authEffects: AuthEffects = createAuthEffects(createLogoutAction(userFixture.session));

    authEffects.logout$.subscribe(() => {
      expect(authenticationService.logout).toHaveBeenCalledWith(userFixture.session);
      done();
    });
  });

  it('should return a logout success action', done => {
    const authEffects: AuthEffects = createAuthEffects(createLogoutAction(userFixture.session));

    authEffects.logout$.subscribe(x => {
      expect(x).toEqual(new LogoutSuccessAction());
      done();
    });
  });

  it('should fire a user session destory actions', done => {
    const authEffects: AuthEffects = createAuthEffects(createLogoutSuccessAction());

    authEffects.logoutSuccess$.subscribe(x => {
      expect(x).toEqual(new UserSessionActions.DestroyAction());
      done();
    });
  });

  function createAuthEffects(actions: Actions): AuthEffects {
    return new AuthEffects(actions, authenticationService, router);
  }

  function createLogoutAction(session: Session): Actions {
    return new Actions(Observable.of(new LogoutAction(session)));
  }

  function createLogoutSuccessAction(): Actions {
    return new Actions(Observable.of(new LogoutSuccessAction()));
  }

});
