import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middleWare = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleWare.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleWare)
  )
);

export default configureStore;
