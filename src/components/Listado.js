// Librerias
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

// React-Bootstrap
import { Button, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";

const Listado = ({ addOrRemoveFavs }) => {
    const [moviesList, setMoviesList] = useState([]);
    const MySwal = withReactContent(Swal);
    const token = sessionStorage.getItem("token");

    // Integracion de la API en montaje
    useEffect(() => {
        const endPoint =
            "https://api.themoviedb.org/3/discover/movie?api_key=78e3f972ec6c669fc1ac630ff32f3a2d&language=es-ES";
        axios
            .get(endPoint)
            .then((resp) => {
                setMoviesList(resp.data.results);
            })
            .catch((err) => {
                MySwal.fire({
                    title: <p>Ocurrió un error, intente mas tarde.</p>,
                });
                return;
            });
    }, []);

    // Renderizado condicional, dependiente del "token"
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <Row xs={1} sm={2} md={3} lg={4}>
            {moviesList.map((movie, idx) => {
                return (
                    <Col key={idx} className="mb-4">
                        <Card>
                            <Card.Img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
                                    {movie.overview.substring(0, 100)}...
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
    );
};

export default Listado;
