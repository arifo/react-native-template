import React from 'react';

import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from 'AppContainer';
import store, { persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppContainer />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
