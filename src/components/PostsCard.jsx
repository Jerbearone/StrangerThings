import Card from 'react-bootstrap/Card';
import {useEffect, useState} from 'react';

//create a get request to render all posts. We can see if there are any currently in our cohort. If not I will create a few.
//create post function

const BASEURL = 'https://strangers-things.herokuapp.com/api';
const COHORT = "2302-acc-pt-web-pt-e";
const URL = `${BASEURL}/${COHORT}`;
//get all posts ( will move this to api folder/file)
const GETPOSTS = `${URL}/posts`;



function SingleCard({post}) {
 
  //Single card that will be mapped
  console.log("posts");
  console.log(post);
  return (
    <Card className='post_card'>
    <Card.Header>{post.author.username}</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
      <p>
          {' '}
          {post.title}
          {' '}
        </p>
        <p>
          {' '}
          {post.description}
          {' '}
        </p>
        <footer className="blockquote-footer">
          Price: <cite title="Source Title">{post.price}</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>

  )
}

function PostsCard() {
  const [posts, setPosts] = useState([])
  useEffect(()=> {
    const getPosts = async () => {
      try{
        const response = await fetch(GETPOSTS);
        const data = await response.json();
        setPosts(data.data.posts);
        console.log(data);
      }catch(error){
        console.log(error)

      }
    }

    getPosts();
  }, []);

  return (
    <div>
      {
        posts.map((post) => {
          //return <h1 key={post.author._id}>{post.author.username}</h1>
          return(<SingleCard key={post.author._id} post={post}></SingleCard>)
        })
      }
    </div>
  );
}

export default PostsCard;