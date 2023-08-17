import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="posts">Posts</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;