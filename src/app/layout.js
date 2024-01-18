import RootLayout from '@/app/_app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

function App() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}

export default App;