import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { getToken } from '../networking/localStorage/localStorage';
import { sendMessage} from '../networking/api/api';

export default function NewMessage({messageId, username}) {
    /*const {state} = useLocation()
    const {username} = state;*/
    const [id, setId] = useState(messageId);
    const [message, setMessage] = useState("");
    const token = getToken();
    const [messageToggle, setMessageToggle] = useState(false);


    useEffect(() => {
        if (id !== "" && message !== "" && token !== null && messageToggle) {
            console.log("sending mesage...")
            sendMessage(id, token, message);

        } else {
            console.log(`Could not send message ID: ${id} message: ${message} token : ${token}`)
        }
    },[messageToggle]);

    //check if token is not equal to empty string, then attempt to post a new message
    return (
        <div>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>New message for: {username}</Form.Label>
                <Form.Control onChange={(event)=>{setMessage(event.target.value)}} type="text" placeholder="Message" />
            </Form.Group>
            </Form>
            <br></br>

            <div className="mb-2">
                <Button variant="primary" onClick={()=>setMessageToggle(true)} size="md">
                    Send Message
                </Button>{' '}
            </div>
        </div>
    )
}