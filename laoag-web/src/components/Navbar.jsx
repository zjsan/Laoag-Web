import { Navbar, Nav, Container } from 'react-bootstrap';
import '../navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="#home">Laoag Ilocos Norte Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="nav-links" to="#home">Home</Nav.Link>
            <Nav.Link as={Link} className="nav-links" to="#history-section">History</Nav.Link>
            <Nav.Link as={Link} className="nav-links" to="#discover-section">Discover</Nav.Link>
            <Nav.Link as={Link} className="nav-links" to="#visit-section">Why Visit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
