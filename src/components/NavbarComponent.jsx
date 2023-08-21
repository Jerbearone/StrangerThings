import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { deleteToken, getToken } from '../networking/localStorage/localStorage';
import { useNavigate } from 'react-router';

function NavbarComponent() {
  const navigate = useNavigate();
  const token = getToken();
  return (
    <>
      <Navbar className='main_navbar' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="/posts">Posts</Nav.Link>
            {token!== null && <Nav.Link href="/profile">Profile</Nav.Link>}
            <Nav.Link onClick={()=> {
              deleteToken();
              navigate("login")

            }}>{token!==null ? "Logout" : "Login" }</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;