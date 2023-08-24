import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { getToken } from '../networking/localStorage/localStorage';
import { getUserData, sendPost } from '../networking/api/api';

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [post, setPost] = useState({});
    const [username, setUsername] = useState(null);
    const token = getToken();
    console.log(token);

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


    useEffect(() => {

        sendPost(token, post);
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
                    Send Message
                </Button>{' '}
            </div>
        </div>
    )
}