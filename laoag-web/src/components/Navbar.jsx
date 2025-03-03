import { Navbar, Nav, Container } from 'react-bootstrap';
import '../navbar.css'
const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Laoag Ilocos Norte Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-links" href="#about">History</Nav.Link>
            <Nav.Link className="nav-links" href="#contact">Why Visit</Nav.Link>
            <Nav.Link className="nav-links" href="#contact">Discover</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
