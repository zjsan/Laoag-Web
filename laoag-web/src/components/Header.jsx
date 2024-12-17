import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';

const Header = () => {
  
  return (
    <header>
        <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Laoag Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  bg='blue' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#history">History</Nav.Link>
            <Nav.Link href="#why-visit">Why Visit</Nav.Link>
            <NavDropdown title="Discover" id="basic-nav-dropdown">
              <NavDropdown.Item href="#places">Places</NavDropdown.Item>
              <NavDropdown.Item href="#food">Food</NavDropdown.Item>
              <NavDropdown.Item href="#culture">Culture</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="heading-content">
            <h1>Laoag Ilocos Norte Travel</h1>
            <h2>Here is what you need to know about Laoag!</h2>
      </div>
    </header>
  )
}

export default Header;
