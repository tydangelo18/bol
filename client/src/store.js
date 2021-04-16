// Redux Entry Point
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Root-Reducer connects to store
import rootReducer from './reducers';

// Initial State of reducers
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export the Redux Store for use
export default store;
