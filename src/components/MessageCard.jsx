import Card from 'react-bootstrap/Card';

export default function MessageCard({message}) {
 
    //Single card that will be mapped
    console.log("posts");
    console.log("Message: " + message);
    console.log("Message username: " + message.fromUser.username);
    return (
      <Card className='post_card'>
      <Card.Header>{message.fromUser.username}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>
            {' '}
            {message.content}
            {' '}
            
          </p>
          {/*<Button variant="primary" onClick={()=>{
            navigate("/posts/message", {state:{username: message.fromUser.username }})

          }} size="sm">
            Reply
        </Button>*/}
        </blockquote>
      </Card.Body>
    </Card>
    )
  }