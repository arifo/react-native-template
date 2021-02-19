import { createAction } from 'deox';

import { CommonDataType } from './types';

export const getCommonDataAction = {
  request: createAction('common/GET_COMMON_DATA'),
  success: createAction('common/GET_COMMON_DATA_SUCCESS', res => (payload: CommonDataType[]) =>
    res(payload),
  ),
  fail: createAction('common/GET_COMMON_DATA_FAIL', res => (err: { message: string }) => res(err)),
};
