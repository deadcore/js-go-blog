import { UserSession } from '../../../../app/models/user-session';
import { UserSessionFixture } from '../../../fixtures/user-session.fixture';
import { ActionTypes, Actions } from 'actions/user-session';
import { reducer } from 'store/user-session/reducer';

describe('User-Session Reducer', () => {
  let userSessionFixture: UserSession;
  let initialState;

  beforeEach(() => {
    userSessionFixture = UserSessionFixture;

    initialState = {
      userSession: userSessionFixture,
      auth: {
        authTest: 'Something for test'
      }
    };
  });

  describe('CREATE', () => {
    it('should return a state with a user-session', () => {
      let action: Actions = {
        type: ActionTypes.CREATE,
        payload: UserSessionFixture
      };
      let expectedState = UserSessionFixture;

      expect(reducer(null, action)).toEqual(expectedState);
    });
  });

  describe('DESTROY', () => {
    it('should a initial state when we fire the DESTROY action', () => {
      let action: Actions = {
        type: ActionTypes.DESTROY
      };

      expect(reducer(null, action)).toEqual({session: null, rememberMeToken: null});
    });
  });

  describe('UPDATE', () => {
    it('should only update the user-session state when we do a UPDATE action', () => {
      let action: Actions = {
        type: ActionTypes.UPDATE,
        payload: 'newUpdatedToken'
      };
      expect(reducer(initialState, action).session.token).toEqual('newUpdatedToken');
    });
  });
});


