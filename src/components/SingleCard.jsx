import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import NewMessage from './NewMessage';
export default function SingleCard({post, username, toast, setToast, setToastMessage}) {
  const [messageVisible, setMessageVisible] = useState(false)
  const changeMessageVisibility = () => {
    setMessageVisible(!messageVisible);
  }
    //Single card that will be mapped
    console.log("posts");
    console.log(post);
    return (
      <div>
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
            
            <div className='message_card'>
            {(username !== null && username !== post.author.username) && <Button variant="primary" onClick={()=>changeMessageVisibility()} size="md">
                Message {post.author.username}
              </Button>}
              
              {messageVisible && <div> <br></br> <br></br> <NewMessage setToast={setToast} toast={toast} setToastMessage={setToastMessage}  username={post.author.username} messageId={post._id}></NewMessage></div>}
            </div>
              
          </blockquote>
          
        </Card.Body>
        
      </Card>

    </div>
    )
  }