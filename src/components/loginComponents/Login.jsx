import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveToken } from '../../networking/localStorage/localStorage';
import LoginAlert from './LoginAlert';
const BASEURL = 'https://strangers-things.herokuapp.com/api';
const COHORT = "2302-acc-pt-web-pt-e";
const URL = `${BASEURL}/${COHORT}`;

export default function Login({token, setToken}) {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginToggle, setLoginToggle] = useState(false);
    console.log("in Login component")
    //array containing name and password
    const [userLogin, setUserLogin] = useState(["",""])
    useEffect(()=>{
        console.log("Use effect was called")
        console.log(`Username: ${userName} Pass: ${password}` )
        const createAccount = async() => {
            try{
                const response = await fetch(`${URL}/users/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user:{
                            username: userName,
                            password: password
                        }
                    })
                })
                const data = await response.json();
                setToken(data.data.token);
                //saveToken(data.data.token);
                console.log(data);
                saveToken(data.data.token);
                if (data.success) {    
                    navigate("/")   
                } else {
                    setLoginToggle(true);
                }

            }catch(error){
                console.log("Error: " + error);
                console.log("toggle Login");
                setLoginToggle(true);     
            }
        }
        
        function createLogin() {
            if (userName.length > 7 && password.length > 7) {
                createAccount();
            } else if (password!== "" || userName!== "") {
                setLoginToggle(true);
            }
        }

        createLogin();

    }, userLogin)


    return (
        <div className="login_form">
            <Form.Label htmlFor="inputPassword5">Username</Form.Label>
            <Form.Control
                type="text"
                id="inputUsername"
                aria-describedby="passwordHelpBlock"
                autoComplete='username'
                onChange={(event)=> setUsername(event.target.value)}
            />
            <Form.Text id="passwordHelpBlock" muted>
                Enter a solid and memorable user name
            </Form.Text>

            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(event)=> setPassword(event.target.value)}
            />
            <Form.Text id="passwordHelpBlock" muted >
                Your password must be 8-20 characters long.
            </Form.Text>

            <div className="mb-2">
                <Button variant="primary" onClick={()=>setUserLogin([userName, password])} size="md">
                    Login
                </Button>{' '}
            </div>
            <Link to="/user/register">Register here</Link>
            {loginToggle && <LoginAlert></LoginAlert>}

        </div>
    )
}