import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
  const { handleChange, checked } = useContext(ColorModeContext);
  console.log(checked);
  console.log(sessionStorage.getItem("hoho"));
  console.log(sessionStorage.getItem("hoho") === "true");
  return (
    <Navbar bg="info" variant={"dark"}>
      <Container>
        <Navbar.Brand href="/">NavBar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="add-product">AddProduct</Nav.Link>
        </Nav>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleChange}
          />
        </div>
      </Container>
    </Navbar>
  );
}
