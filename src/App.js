import React from 'react';
import './App.css';
import firebase from './firestore'
import Users from './components/users';
import Nav from './Navbar'
import UsersContainer from './components/usersContainer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <UsersContainer/>
    </div>
  )
}

export default App;
