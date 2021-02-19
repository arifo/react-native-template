import { all } from 'redux-saga/effects';

import { watchCommon } from 'modules/common/sagas';

export default function* rootSaga() {
  yield all([watchCommon()]);
}
