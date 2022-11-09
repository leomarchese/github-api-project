import { Action, User, Repos, Repo } from '@/common/types';
import { ACTION_TYPES } from '@types';

type UserState = {
  userInfos: User & {
    isLoading: boolean;
  };
  userRepos: {
    isLoading: boolean;
    list: Repos;
  };
  userFollowers: {
    isLoading: boolean;
    list: Array<string>;
  };
  generalError: {
    status: boolean;
    message: string;
  };
};

const INITIAL_STATE: UserState = {
  userInfos: {
    isLoading: false,
    avatar_url: '',
    followers: 0,
    following: 0,
    html_url: '',
    id: 0,
    login: '',
    name: '',
    public_repos: 0,
  },
  userRepos: {
    isLoading: false,
    list: []
  },
  userFollowers: {
    isLoading: false,
    list: []
  },
  generalError: {
    status: false,
    message: ''
  }
};

const USER_TYPES = ACTION_TYPES['users'];

export default (state = INITIAL_STATE, action: Action) => {
  const { payload } = action;

  switch (action.type) {
    case USER_TYPES.CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
