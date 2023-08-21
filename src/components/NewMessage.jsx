import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { getToken } from '../networking/localStorage/localStorage';
import { sendMessage} from '../networking/api/api';
import { useLocation } from 'react-router';

export default function NewMessage({messageId}) {
    const {state} = useLocation()
    const {username} = state;
    const [id, setId] = useState(messageId);
    const [message, setMessage] = useState("");
    const token = getToken();
    const [messageString, setMessageString] = useState("");
    console.log(token);


    useEffect(() => {
        if (id != "" && message != "" && token !== null) {
            sendMessage(id, token, message);
        }
    },[message]);


    async function submitMessage() {
        if (id != "" && message != "" && token !== null) {
            //set user to object to post to api
            setMessage(messageString)
            console.log("Message:" + message);
        }
    }

    //check if token is not equal to empty string, then attempt to post a new message
    return (
        <div className='new_posts'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{username}</Form.Label>
                <Form.Control onChange={(event)=>{setMessageString(event.target.value)}} type="text" placeholder="Message" />
            </Form.Group>
            </Form>

            <div className="mb-2">
                <Button variant="primary" onClick={()=>submitMessage()} size="lg">
                    Submit Post
                </Button>{' '}
            </div>
        </div>
    )
}