import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  const Gapsetting = { margin: '0 20px' }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{padding:"1% 5%"}}>
      <Container fluid>
        <Navbar.Brand href="/">SVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            </Nav>
<Form className="d-flex">
  <Nav.Link href="/" style={Gapsetting}>HOME</Nav.Link>
  <Nav.Link href="/about" style={Gapsetting}>ABOUT US</Nav.Link>
  <Nav.Link href="/machining" style={Gapsetting}>BUSINESS VERTICALS</Nav.Link>
  <Nav.Link href="/our-team" style={Gapsetting}>TEAM SVE</Nav.Link>
  <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
</Form>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;