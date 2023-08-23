import Alert from 'react-bootstrap/Alert';
const variant = 'danger'
export default function RegisterAlertFaileCreation() {
    return (
    <div>
        <Alert key={variant} variant={variant}>
          Failed to create account, please try a different username/password.
        </Alert>

    </div>)
}