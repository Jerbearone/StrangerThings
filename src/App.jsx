import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import Login from './components/loginComponents/Login';
import PostsCard from './components/PostsCard';
import Profile from './components/Profile';
import Logout from './components/loginComponents/Logout';
import Register from './components/loginComponents/Register';
import {useState} from 'react'
import NewPost from './components/NewPost';
import Home from './components/Home';
import NewMessage from './components/NewMessage';

function App() {

  const [token, setToken] = useState(null);
  console.log("Token (APP):" + token);
  return (

    <div className='root_view'>
      <NavbarComponent token={token}></NavbarComponent>
      <div className='root_child'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login token={token} setToken = {setToken}></Login>}></Route>
          <Route path='/posts/new' element={<NewPost token={token}></NewPost>}></Route>
          <Route path='/posts' element={<PostsCard ></PostsCard>}></Route>
          <Route path='/posts/message' element={<NewMessage></NewMessage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path='/user/register' element={<Register></Register>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
