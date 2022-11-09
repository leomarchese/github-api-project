import { ACTION_TYPES } from './action-types';
import { AppDispatch } from '..';

export const clearState = (category: 'users' | 'repo') => {
  return (dispatch: AppDispatch) => dispatch({ type: ACTION_TYPES[category].CLEAR_STATE });
}
