import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">To-Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            //<NavDropdown title="Pages" id="basic-nav-dropdown">
             // <NavDropdown.Item as={Link} to="/action">Action</NavDropdown.Item>
             // <NavDropdown.Item as={Link} to="/another-action">Another Action</NavDropdown.Item>
              //<NavDropdown.Item as={Link} to="/something">Something</NavDropdown.Item>
              //<NavDropdown.Divider />
             // <NavDropdown.Item as={Link} to="/separated">Separated Link</NavDropdown.Item>
            //</NavDropdown>*/

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;