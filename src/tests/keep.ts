import { RequestStatus } from 'models/request-status';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from 'actions/manage-user';
import { User } from 'models/user';

export interface State {
  user: User;
  searchUser: {
    searchQuery: string;
    status: RequestStatus;
    error: any;
  };
  updateUser: {
    status: RequestStatus;
    error: any;
  };
}

export const INITIAL_STATE: State = {
  user: null,
  searchUser: {
    searchQuery: '',
    status: RequestStatus.NONE,
    error: null
  },
  updateUser: {
    status: RequestStatus.NONE,
    error: null
  },
};

export function reducer(state: State = INITIAL_STATE, action: Actions): State {
  switch (action.type) {
    case ActionTypes.MANAGE_USER_SEARCH:
      return Object.assign({}, state,
        {
          user: null,
          searchUser: {
            status: RequestStatus.LOADING,
            searchQuery: action.payload,
            error: null,
          }
        });
    case ActionTypes.MANAGE_USER_SEARCH_ERROR:
      return Object.assign({}, state,
        { user: null, loading: false, error: action.payload });
    case ActionTypes.MANAGE_USER_SEARCH_COMPLETE:
      return Object.assign({}, state, { user: action.payload, error: null, loading: false });
  }
  return state;
}


export function getUser(state$: Observable<State>) {
  return state$.select(state => state.user);
}

export function getError(state$: Observable<State>) {
  return state$.select(state => state.searchUser.error);
}

export function isLoading(state$: Observable<State>) {
  return state$.select(state => state.searchUser.status);
}

export function getSearchQuery(state$: Observable<State>) {
  return state$.select(state => state.searchUser.searchQuery);
}
