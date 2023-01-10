import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export default function createStoreInstance(preloadedState = {}) {
    return configureStore({ reducer, preloadedState })
}
