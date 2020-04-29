import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {

  return (
    <div className='app'>
      <Switch>
        <PrivateRoute exact path='/friends-list' component={FriendsList} />
        <Route path='/login' component={LoginPage} />
        <Route component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
