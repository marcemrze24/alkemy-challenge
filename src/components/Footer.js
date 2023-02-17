// React-Bootstrap
import { Nav } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Nav as="ul" className="justify-content-center">
                <Nav.Item as="li">
                    <Nav.Link
                        href="https://youtube.com"
                        rel="noopener noreferrer"
                    >
                        Youtube
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link
                        href="https://facebook.com"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link
                        href="https://instagram.com"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center">
                {" "}
                &#169; Copyright, Marcelo Daniel Mercado{" "}
            </p>
        </footer>
    );
};

export default Footer;
