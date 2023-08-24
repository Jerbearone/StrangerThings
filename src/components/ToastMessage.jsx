import { useState, useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ToastMessage({toast, toastMessage}) {
    const count = useRef(-1)

    const [show, setShow] = useState(toast);
    console.log("toast was called" + toast);
    useEffect(() => {
        if (count.current > 0) {
            setShow(true);
            console.log("current count" + count.current)

        } else {
            count.current = count.current+1
            console.log("current count: " + count.current)}
        
  }, [toast])
  

  return (
    <div className="toast_message">
        <Row>
        <Col xs={6}>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                />
                <strong className="me-auto">Message:</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </Col>
        </Row>
    </div>
  );
}

export default ToastMessage;