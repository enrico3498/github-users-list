import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import List from './List';

function App() {
  const [users, setUsers] = useState(null)

  const getUsers = (data) => {
    setUsers(data)
  }

  return (
    <React.Fragment>
      <Search getUsers={getUsers}/>
      <List users={users}/>
    </React.Fragment>
  );
}

export default App;
