import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/cartReducer';

const store = configureStore({
  reducer: cartReducer
});

export default store;