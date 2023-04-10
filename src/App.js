import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserPanel from './UserPanel';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <h1>Welcome to the App</h1>
          {!isLoggedIn && <Link to="/login">Login</Link>}
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
          <UserPanel isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/users">
          <h1>User List</h1>
          {isLoggedIn ? (
            <UserPanel isLoggedIn={isLoggedIn} />
          ) : (
            <p>Please log in to view the user list.</p>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
