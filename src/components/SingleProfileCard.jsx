import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deletePost } from '../networking/api/api';
import EditPost from './EditPost';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SingleProfileCard({post, token,toast, setToast, clickEffectToggle, setClickEffectToggle, setToastMessage}) {
  const [editClicked, setEditClicked] = useState(false);
  const navigate = useNavigate();
  
 
    //Single card that will be mapped
    console.log("posts");
    console.log(post);
    let postActivity = "";
    if (post.active) {
      postActivity = "Active"

    } else {
      postActivity = "Not active";
    }
    return (
      <Card className='post_card'>
      <Card.Header>Last updated: {post.updatedAt}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>
            {' '}
            {post.title}
            {' '}
          </p>
          <p>Post activity: 
            {' '}
            {postActivity}
            {' '}
          </p>
          <p>
            {' '}
            {post.description}
            {' '}
          </p>
          <footer className="blockquote-footer">
            Price: <cite title="Source Title">{post.price}<hr></hr> </cite>
            
          </footer>
        </blockquote>

       
        {post.active && <Button variant="primary" onClick={()=>{
          //Edit
          if (editClicked) {
            setEditClicked(false)} 
          else {
              setEditClicked(true);
          }


        }} size="md">
            Edit Post
        </Button>}
        {editClicked && <EditPost toast={toast} setToast={setToast} clickEffectToggle={clickEffectToggle}
         setClickEffectToggle={setClickEffectToggle} setToastMessage={setToastMessage} post={post}></EditPost>}
        <hr></hr>
        

        {post.active && <Button variant="primary" onClick={()=>{
          //delete post
          const getResponse = async() => {
            const responseData = await deletePost(post._id, token);
            console.log(responseData);
            if (responseData.success) {
              console.log("Sucessfully Deleted!")
              //refresh page
              setToast(!toast);
              setToastMessage("Successfully deleted post!")
              setClickEffectToggle(!clickEffectToggle);
            }

          }
          getResponse();
          

        }} size="md">
            Delete Post
        </Button>}
      </Card.Body>
      
    </Card>
    )
  }