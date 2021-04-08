import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
