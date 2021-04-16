import axios from 'axios';

// The token from Local Storage is always sent with every request
const setAuthToken = (token) => {
  // If a token exists, add it to the Headers
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
