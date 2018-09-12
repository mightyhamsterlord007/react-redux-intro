import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose }
  from 'redux';
import thunk from 'redux-thunk';

import { itemReducer } from '../reducers';

const reducers = combineReducers({
  items: itemReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
