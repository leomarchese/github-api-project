import { Action } from '@/common/types';
import * as types from '@types';

type HistoryItem = {
  title: string;
  id: string;
  type: string;
};

type HistoryState = Array<HistoryItem>;

const INITIAL_STATE: HistoryState = [];

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
