import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
