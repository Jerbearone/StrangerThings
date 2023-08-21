import Card from 'react-bootstrap/Card';

export default function SingleCard({post}) {
 
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