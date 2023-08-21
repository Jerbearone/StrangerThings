import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deletePost } from '../networking/api/api';
import EditPost from './EditPost';
import { useState } from 'react';

export default function SingleProfileCard({post, token}) {
  const [editClicked, setEditClicked] = useState(false);
  
 
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
        {editClicked && <EditPost post={post}></EditPost>}
        <hr></hr>
        

        {post.active && <Button variant="primary" onClick={()=>{
          //delete post
          deletePost(post._id, token);
        }} size="md">
            Delete Post
        </Button>}
      </Card.Body>
      
    </Card>
    )
  }