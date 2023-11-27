import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation} from 'react-router-dom';
import Logo from './Logo';
function NavScrollExample() {
  const param1 = useLocation().pathname
  console.log(param1)
  const highlight = {
    // backgroundColor:"aliceblue",
    color : '#f37e00',
    // padding: '20px 20px'
    margin: '0 20px' 
  }
  const Gapsetting = { margin: '0 30px' }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{margin:"0"}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{height:"80px",overflow:"hidden" }} ><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            style={{padding:"1% 1%"}}
            navbarScroll
          >
            </Nav>
<Form className="d-flex">
  <Nav.Link href="/" style={(param1==="/")?highlight:Gapsetting}>HOME</Nav.Link>
  <Nav.Link href="/about"  style={(param1==="/about")?highlight:Gapsetting}>ABOUT US</Nav.Link>
  <Nav.Link href="/machining" style={(param1==="/machining")?highlight:Gapsetting}>BUSINESS VERTICALS</Nav.Link>
  {/* <Nav.Link href="/our-team" style={(param1==="/our-team")?highlight:Gapsetting}>TEAM SVE</Nav.Link> */}
  <Nav.Link href="/contact-us" style={(param1==="/contact-us")?highlight:Gapsetting}>CONTACT US</Nav.Link>
</Form>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;