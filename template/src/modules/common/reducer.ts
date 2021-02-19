import { createReducer } from 'deox';
import produce from 'immer';

import { getCommonDataAction } from './actions';
import { CommonDataState } from './types';

const initialState: CommonDataState = {
  data: [],
  loading: false,
  error: null,
};

export const commonDataReducer = createReducer(initialState, handle => [
  handle(getCommonDataAction.request, state =>
    produce(state, draft => {
      draft.loading = true;
      draft.error = null;
    }),
  ),
  handle(getCommonDataAction.success, (state, { payload }) =>
    produce(state, draft => {
      draft.loading = false;
      draft.error = null;
      draft.data = payload;
    }),
  ),
  handle(getCommonDataAction.fail, (state, { payload }) =>
    produce(state, draft => {
      draft.loading = false;
      draft.error = payload;
    }),
  ),
]);
