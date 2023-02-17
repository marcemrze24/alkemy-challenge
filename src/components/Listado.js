// Librerias
import { Link, Navigate } from "react-router-dom";

// React-Bootstrap
import { Card, Col, Row } from "react-bootstrap";

const Listado = () => {
    const token = localStorage.getItem("token");

    // Renderizado condicional, dependiente del "token"
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <Row xs={1} className="w-75 mx-auto gap-4">
            <Col>
                <Card>
                    <Card.Img
                        src="https://picsum.photos/250/200"
                        variant="top"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {" "}
                            Some quick example text to build on the card title
                            and make up the{" "}
                        </Card.Text>
                        <Link as="button" className="btn btn-primary" to={"/"}>
                            Click me!
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img
                        src="https://picsum.photos/250/200"
                        variant="top"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {" "}
                            Some quick example text to build on the card title
                            and make up the{" "}
                        </Card.Text>
                        <Link as="button" className="btn btn-primary" to={"/"}>
                            Click me!
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img
                        src="https://picsum.photos/250/200"
                        variant="top"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {" "}
                            Some quick example text to build on the card title
                            and make up the{" "}
                        </Card.Text>
                        <Link as="button" className="btn btn-primary" to={"/"}>
                            Click me!
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Listado;
