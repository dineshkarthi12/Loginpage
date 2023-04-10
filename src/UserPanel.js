import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import ListUsers from './ListUsers';

const UserPanel = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/users">
          <ListUsers />
        </Route>
      </Switch>
    </Router>
  );
};

export default UserPanel;