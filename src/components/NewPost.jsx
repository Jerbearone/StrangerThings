import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


const BASEURL = 'https://strangers-things.herokuapp.com/api';
const COHORT = "2302-acc-pt-web-pt-e";
const URL = `${BASEURL}/${COHORT}`;

export default function NewPost({token}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [post, setPost] = useState({});
    console.log(token);


    useEffect(() => {

        async function sendPost() {
            try{
                if (token != "" && post != {}) {
                    //if data is here, and token is here, submit the post
                    const response = await fetch(`${URL}/posts`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify(post)
                    });
                    const data = await response.json();
                    console.log(data);
                    
                }
            }catch(error){
                console.log(error);
            }

        }
        sendPost();
 

        

    },[post])

    async function submitPost() {
        if (title != "" && description != "" && price != "") {
            //set user to object to post to api

            setPost({post:{location: "CA",title:title, description: description, price: price}})
            console.log("post: " + post + post.description)
            console.log("postString" + JSON.stringify(post));
        }


    }


    
    //check if token is not equal to empty string, then attempt to post a new message
    return (
        <div className='new_posts'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="Submarine" />
            </Form.Group>
 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={(event)=>{setPrice(event.target.value)}} type="text" placeholder="500,000 bitcoins" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(event)=> setDescription(event.target.value)} as="textarea" rows={3} />
            </Form.Group>
            </Form>

            <div className="mb-2">
                <Button variant="primary" onClick={()=>submitPost()} size="lg">
                    Submit Post
                </Button>{' '}
            </div>
        </div>
    )
}