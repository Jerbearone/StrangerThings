import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import PostsCard from './components/PostsCard';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Register from './components/Register';
import {useState} from 'react'
import NewPost from './components/NewPost';

function App() {

  const [token, setToken] = useState("");
  console.log("Token (APP):" + token);
  return (

    <>
      <NavbarComponent token={token}></NavbarComponent>
      <Routes>
        <Route path='/' element={<Login token={token} setToken = {setToken}></Login>}></Route>
        <Route path='/posts/new' element={<NewPost token={token}></NewPost>}></Route>
        <Route path='/posts' element={<PostsCard token={token}></PostsCard>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/user/register' element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}

export default App
