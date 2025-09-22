import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarDefult() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home" className='ms-3'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/About">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarDefult;