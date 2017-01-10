import { Actions, ActionTypes } from 'actions/auth';
import { reducer } from 'store/auth/reducer';

describe('AuthReducer', () => {
  it('should return a loading state when I do a login Action.', () => {
    let action: Actions = {
      type: ActionTypes.AUTH_LOGIN,
      payload: null
    };
    let expectedState = { loading: true, error: null };
    expect(reducer(null, action)).toEqual(expectedState);
  });

  it('should return an error if login failed', () => {
    let action: Actions = {
      type: ActionTypes.AUTH_LOGIN_FAILED,
      payload: null
    };
    let expectedState = {
      error: action.payload,
      loading: false,
      succeeded: false
    };
    expect(reducer(null, action)).toEqual(expectedState);
  });

  it('it should return a success state if login succedded', () => {
    let action: Actions = {
      type: ActionTypes.AUTH_LOGIN_SUCCESS,
      payload: null
    };
    let expectedState = { error: null, loading: false, succeeded: true };
    expect(reducer(null, action)).toEqual(expectedState);
  });
});


