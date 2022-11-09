import { Action, Error, Repo } from '@/common/types';
import { ACTION_TYPES } from '@types';

type RepoState = {
  isLoading: boolean;
  repo: Repo;
  error: Error
};

const INITIAL_STATE: RepoState = {
  isLoading: false,
  repo: {
    id: 0,
    name: '',
    full_name: '',
    html_url: '',
    description: '',
    stargazers_count: 0,
    watchers_count: 0,
    language: '',
    forks: 0,
  },
  error: {
    status: false,
    message: '',
  }
};

const REPO_TYPES = ACTION_TYPES['repo'];

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case REPO_TYPES.CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
