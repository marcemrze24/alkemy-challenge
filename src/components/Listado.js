// Librerias
import { Link, Navigate } from "react-router-dom";

// React-Bootstrap
import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Listado = () => {
    const token = localStorage.getItem("token");
    const endPoint =
        "https://api.themoviedb.org/3/discover/movie?api_key=78e3f972ec6c669fc1ac630ff32f3a2d&language=es-ES";
    const [moviesList, setMoviesList] = useState([]);

    // Integracion de la API en montaje
    useEffect(() => {
        axios.get(endPoint).then((resp) => {
            const apiData = resp.data;
            setMoviesList(apiData.results);
        });
    }, [moviesList]);

    // Renderizado condicional, dependiente del "token"
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <Row xs={1} className="w-75 mx-auto gap-4">
            {moviesList.map((movie, idx) => {
                return (
                    <Col key={idx}>
                        <Card>
                            <Card.Img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                variant="top"
                            />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.overview}</Card.Text>
                                <Link
                                    as="button"
                                    className="btn btn-primary"
                                    to={"/"}
                                >
                                    Click me!
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
