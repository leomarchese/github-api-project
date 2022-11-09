import RepoReducer from './repo-reducer';
import UserReducer from './user-reducer';
import HistoryReducer from './history-reducer';

export default {
  user: UserReducer,
  repo: RepoReducer,
  history: HistoryReducer,
}
