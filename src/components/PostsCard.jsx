
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import SearchBar from './SearchBar';
import { getAllPosts, getUserData} from '../networking/api/api';
import SingleCard from './SingleCard';
import Button from 'react-bootstrap/Button';
import { getToken } from '../networking/localStorage/localStorage';

//create a get request to render all posts. We can see if there are any currently in our cohort. If not I will create a few.
//create post function
const token = getToken();
console.log(token);

function PostsCard() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [username, setUsername] = useState(null);

  
  const goToNew = useNavigate();
  useEffect(()=> {
    const getPosts = async () => {
      try{
        const data = await getAllPosts()
        setPosts(data.data.posts);
        setFilteredPosts(data.data.posts);
        //console.log(data);
      }catch(error){
        console.log(error)

      }
    }

    getPosts();
  }, []);

  
  useEffect(()=> {
        
    const getData = async()=> {
        if (token !== null) {
            const data= await getUserData(token);
            setUsername(data.data.username);
            console.log(data.data.username);
            console.log("User Data: " + data);

        } else {
            console.log("Null Token");
        }
    }
    getData();
},[])




  return (
    <div>
      {token!== null && <div className='create_new_post_button'>
        <Button onClick={()=>{
          
          goToNew("/posts/new");
        }}>Create New</Button>
      </div>}
      

      <SearchBar posts={posts} filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts}></SearchBar>
      
      {
        filteredPosts.map((post) => {
          //return <h1 key={post.author._id}>{post.author.username}</h1>
          return(<SingleCard key={post._id} post={post} username = {username}></SingleCard>)
        })
      }
    </div>
  );
}

export default PostsCard;