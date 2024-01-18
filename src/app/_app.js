import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Example from './checkout/page';

function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
}

export default App;