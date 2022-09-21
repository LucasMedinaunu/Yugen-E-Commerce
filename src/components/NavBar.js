import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Yugen
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#hodies">Hodies</Nav.Link>
          <Nav.Link href="#camisetas">Camisetas</Nav.Link>
          <Nav.Link href="#contactos">Contactos</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;