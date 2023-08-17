import Card from 'react-bootstrap/Card';
import {useEffect, useState} from 'react';

//create a get request to render all posts. We can see if there are any currently in our cohort. If not I will create a few.
//create post function

const BASEURL = 'https://strangers-things.herokuapp.com/api';
const COHORT = "2302-acc-pt-web-pt-e";
const URL = `${BASEURL}/${COHORT}`;
//get all posts ( will move this to api folder/file)
const GETPOSTS = `${URL}/posts`;


function sendTempData() {

}

function PostsCard() {
  useEffect(()=> {
    const getPosts = async () => {
      try{
        const response = await fetch(GETPOSTS);
        const data = await response.json();
        console.log(data);
      }catch(error){
        console.log(error)

      }
    }

    getPosts();
  
  }, [])



  return (
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default PostsCard;