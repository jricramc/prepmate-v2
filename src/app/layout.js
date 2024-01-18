import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import RootLayout from './test';

export default function Layout() {
  if (typeof window !== 'undefined')  // Check if window is defined
  // ReactDOM.render(
    <Provider store={store}>
      <RootLayout />
    </Provider>,
    document.getElementById('root')
  // );
}