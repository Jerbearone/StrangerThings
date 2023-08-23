import Alert from 'react-bootstrap/Alert';
const variant = 'warning'
export default function RegisterAlertInvalidSchema() {
    return (
    <div>
        <Alert key={variant} variant={variant}>
          Please make sure to have at least 7 characters for username and password.
        </Alert>

    </div>)
}