import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation} from 'react-router-dom';
import Logo from './Logo';
function NavScrollExample() {
  const param1 = useLocation().pathname
  console.log(param1)
  const highlight = {
    color : '#f37e00',
    margin: '0 30px' 
  }
  const Gapsetting = { margin: '0 30px' }
  return (
    <Navbar expand="lg" style={{padding:"0",margin:"0",backgroundColor:"#fff"}} sticky='top' >
      <Container fluid>
        <Navbar.Brand href="/" style={{height:"80px",overflow:"hidden",margin:"0",padding:"0"}} ><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            style={{padding:"1% 1%"}}
            // navbarScroll
          >
            </Nav>
  <Nav.Link href="/" style={(param1==="/")?highlight:Gapsetting}>HOME</Nav.Link>
  <Nav.Link href="/about"  style={(param1==="/about")?highlight:Gapsetting}>ABOUT US</Nav.Link>
  <Nav.Link href="/machining" style={(param1==="/machining")?highlight:Gapsetting}>BUSINESS VERTICALS</Nav.Link>
  <Nav.Link href="/contact-us" style={(param1==="/contact-us")?highlight:Gapsetting}>CONTACT US</Nav.Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;