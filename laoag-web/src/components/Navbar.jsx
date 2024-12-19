import { Navbar, Nav, Container } from 'react-bootstrap';
import '../navbar.css'
const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#">Laoag City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
