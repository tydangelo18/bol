// Immutable Object Tree where state is stored for Application
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Redux Middleware
import thunk from 'redux-thunk';
// Connect Reducers to the store
import rootReducer from './reducers';

// Initial State Lives inside reducers
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export the Redux Store for use throughout app
export default store;
