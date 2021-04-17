import { AppRouter } from 'app/AppRouter';
import store from 'app/core/redux/store';
import * as React from 'react';
import { Provider } from 'react-redux';

import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';

function App() {
  return (
    <GlobalErrorBoundary>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </GlobalErrorBoundary>
  );
}

export default App;
