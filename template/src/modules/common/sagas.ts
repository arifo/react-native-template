import { takeLatest, put } from 'redux-saga/effects';

import { CommonApi } from 'services/api';

import { getCommonDataAction } from './actions';

function* getCommonDataSaga() {
  try {
    const { data } = yield CommonApi.getCommonData();
    yield put(getCommonDataAction.success(data));
  } catch (error) {
    yield put(getCommonDataAction.fail(error));
  }
}

export function* watchCommon() {
  yield takeLatest(getCommonDataAction.request, getCommonDataSaga);
}
