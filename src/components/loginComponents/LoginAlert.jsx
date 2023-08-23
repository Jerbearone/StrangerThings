import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
const variant = 'warning'
export default function LoginAlert() {
    return (
    <div>
        <Alert key={variant} variant={variant}>
          Could not login, please try again or create an account {<Link to="/user/register">here</Link>}.
        </Alert>

    </div>)
}