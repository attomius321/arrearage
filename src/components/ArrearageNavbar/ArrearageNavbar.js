import logo from '../../logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ArrearageNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">
            <FontAwesomeIcon icon={faCoffee}/>
            <span style={{marginLeft: '1rem'}}>
                Arrearage
            </span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
  
  export default ArrearageNavbar;