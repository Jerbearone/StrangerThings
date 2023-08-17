import { useState } from 'react'
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import PostsCard from './components/PostsCard';
import Profile from './components/Profile';
import Logout from './components/Logout';

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path='/' element={Login()}></Route>
        <Route path='/posts' element={PostsCard()}></Route>
        <Route path='/profile' element={Profile()}></Route>
        <Route path='/logout' element={Logout()}></Route>
      </Routes>
      

    </>
  )
}

export default App
