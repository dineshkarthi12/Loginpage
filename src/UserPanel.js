import Login from './Login';
import UserList from './UserList';

const UserPanel = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <UserList />}
    </>
  );
};

export default UserPanel;
