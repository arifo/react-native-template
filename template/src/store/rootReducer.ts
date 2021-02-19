import AsyncStorage from '@react-native-community/async-storage';
import { getType } from 'deox';
import { Action, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { resetStore } from 'modules/app/actions';
import { commonDataReducer } from 'modules/common/reducer';
import { RootState } from 'types';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['common'],
};

const projectReducer = combineReducers({
  common: commonDataReducer,
});

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }
  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
