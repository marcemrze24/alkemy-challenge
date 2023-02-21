// librerias
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// React-Bootstrap
import { Row, Col, Card, Button } from "react-bootstrap";
import { BsHeartFill } from "react-icons/bs";

const Resultados = ({ addOrRemoveFavs }) => {
    const [movieResults, setMovieResults] = useState([]);
    const MySwal = withReactContent(Swal);
    const token = sessionStorage.getItem("token");
    console.log("ok");
    const query = new URLSearchParams(window.location.search).get("keyword");
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=78e3f972ec6c669fc1ac630ff32f3a2d&language=es-ES&query=${query}`;
    // integracion de la API en montaje, buscando los resultados que emparejen con el query
    useEffect(() => {
        axios
            .get(endPoint)
            .then((resp) => {
                setMovieResults(resp.data.results);
            })
            .catch((error) => {
                MySwal.fire({
                    title: <p>There was an error.</p>,
                });
                return;
            });
    }, []);

    // Renderizado condicional, dependiente del "token"
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <>
            <h2 className="fw-semibold">Resultados</h2>
            <h3 className="mb-5">
                Usted ha buscado: <em className="fw-bold">{query}</em>{" "}
            </h3>
            <Row xs={1} sm={2} md={3} lg={4}>
                {movieResults.map((movie, idx) => {
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
        </>
    );
};

export default Resultados;
