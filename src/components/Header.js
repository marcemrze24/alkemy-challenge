// Librerias
import { NavLink } from "react-router-dom";

// React-Bootstrap
import { Container, Navbar, Nav } from "react-bootstrap";

// Componentes
import Buscador from "./Buscador";

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" className="border-bottom shadow">
                <Container>
                    <Navbar.Brand
                        as="span"
                        className="fw-semibold fs-2 text-uppercase"
                        style={{ letterSpacing: "6px" }}
                    >
                        Solar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="store-navbar" />
                    <Navbar.Collapse id="store-navbar">
                        <Nav as="ul" className="fw-semibold">
                            <Nav.Item as="li" className="my-1 me-lg-4">
                                <NavLink
                                    to={"/"}
                                    className="text-decoration-none"
                                    style={({ isActive }) =>
                                        isActive
                                            ? { color: "cornflowerblue" }
                                            : { color: "gray" }
                                    }
                                >
                                    Inicio
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li" className="my-1 me-lg-4">
                                <NavLink
                                    to={"/listado"}
                                    className="text-decoration-none"
                                    style={({ isActive }) =>
                                        isActive
                                            ? { color: "cornflowerblue" }
                                            : { color: "gray" }
                                    }
                                >
                                    Listado
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li" className="my-1 me-lg-4">
                                <NavLink
                                    to={"/favoritos"}
                                    className="text-decoration-none"
                                    style={({ isActive }) =>
                                        isActive
                                            ? { color: "cornflowerblue" }
                                            : { color: "gray" }
                                    }
                                >
                                    Favoritos
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Buscador />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
