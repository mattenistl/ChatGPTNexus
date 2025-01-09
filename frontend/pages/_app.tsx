import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persister } from '../src/index'; // Adjust the path if necessary

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
