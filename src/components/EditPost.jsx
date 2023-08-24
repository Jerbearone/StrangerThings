import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { getToken } from '../networking/localStorage/localStorage';
import { sendPost, updatePost } from '../networking/api/api';

export default function EditPost({post, toast, setToast, clickEffectToggle, setClickEffectToggle, setToastMessage}) {
    console.log("POST" + post)
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [price, setPrice] = useState(post.price);
    const token = getToken();
    console.log(token);




    async function submitPost() {
        if (title != "" && description != "" && price != "") {
            //set user to object to post to api

            //update post
            const getResponse = async()=> {
                const data = await updatePost(post._id, token, title, description, price);
                if (data.success) {
                    setToastMessage("Successfully edited post!")
                    setToast(!toast);
                    setClickEffectToggle(!clickEffectToggle);
                }
            }

            getResponse();
            
        }
    }

    //check if token is not equal to empty string, then attempt to post a new message
    return (
        <div className='edit_posts'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(event)=>{setTitle(event.target.value)}} defaultValue={post.title} type="text" placeholder="Submarine" />
            </Form.Group>
 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={(event)=>{setPrice(event.target.value)}} defaultValue={post.price} type="text" placeholder="500,000 bitcoins" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(event)=> setDescription(event.target.value)} defaultValue={post.description} as="textarea" rows={3} />
            </Form.Group>
            </Form>

            <div className="mb-2">
                <Button variant="primary" onClick={()=>submitPost()} size="md">
                    Update
                </Button>{' '}
            </div>
        </div>
    )
}