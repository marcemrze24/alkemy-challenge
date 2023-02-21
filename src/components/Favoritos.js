// librerias
import { Link, Navigate } from "react-router-dom";

// React-Bootstrap
import { Row, Col, Card, Button } from "react-bootstrap";
import { BsHeartFill } from "react-icons/bs";

const Favoritos = ({ favs, addOrRemoveFavs }) => {
    const token = sessionStorage.getItem("token");

    // Renderizado condicional, dependiente del "token"
    if (!token) {
        return <Navigate to={"/"} />;
    }
    if (!favs) {
        return <h2>No tienes nada en Favoritos</h2>;
    }
    return (
        <>
            <h2>Favoritos</h2>
            <Row xs={1} sm={2} md={3} lg={4}>
                {favs.map((movie, idx) => {
                    return (
                        <Col key={idx} className="mb-4">
                            <Card>
                                <Card.Img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.imgURL}`}
                                    variant="top"
                                    className="position-relative"
                                />
                                <Button
                                    variant="danger"
                                    className="position-absolute rounded-circle translate-middle start-100"
                                    data-movie-id={movie.id}
                                    onClick={addOrRemoveFavs}
                                >
                                    <BsHeartFill />
                                </Button>
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.description.substring(0, 100)}...
                                    </Card.Text>
                                    <Link
                                        as="button"
                                        className="btn btn-primary"
                                        to={`/detalle?movieID=${movie.id}`}
                                    >
                                        Ver más
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default Favoritos;
