import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

// Array of MIDDLEWARES
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { store, persistor };