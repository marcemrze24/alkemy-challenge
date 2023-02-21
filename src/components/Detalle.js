// Librerias
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// React-Bootstrap
import { Col, Image, Row } from "react-bootstrap";

const Detalle = () => {
    // react state para guardar la informacion de la API
    const [movieDetails, setMovieDetails] = useState(null);
    // Swal
    const MySwal = withReactContent(Swal);
    // obtengo el token
    const token = sessionStorage.getItem("token");

    // obtengo el movieID del query param
    const query = new URLSearchParams(window.location.search).get("movieID");
    const endPoint = `https://api.themoviedb.org/3/movie/${query}?api_key=78e3f972ec6c669fc1ac630ff32f3a2d&language=es-ES`;
    console.log(movieDetails);
    // utilizo el endpoint para pedir la informacion a la API
    useEffect(() => {
        axios
            .get(endPoint)
            .then((resp) => {
                setMovieDetails(resp.data);
            })
            .catch((error) => {
                MySwal.fire({
                    title: <p>Ocurrió un error, intente mas tarde.</p>,
                });
                return;
            });
    }, []);

    // renderizado dependiente del token
    if (!token) {
        return <Navigate to={"/"} />;
    }

    return (
        <>
            {movieDetails && (
                <Row>
                    <Col xs={6} sm={4} lg={4}>
                        <Image
                            fluid
                            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                        />
                    </Col>
                    <Col xs={6} sm={8} lg={4}>
                        <h2>Titulo: {movieDetails.title}</h2>
                        <p>{movieDetails.original_title}</p>
                        <p>{movieDetails.runtime}min</p>
                    </Col>
                    <Col xs={12} lg={12}>
                        <p>{movieDetails.overview}</p>
                        <p>Fecha de estreno: {movieDetails.release_date}</p>
                        <ul className="d-flex justify-content-between ps-0">
                            <p>Genero:</p>
                            {movieDetails.genres.map((genre, idx) => {
                                return (
                                    <li className="list-unstyled" key={idx}>
                                        {genre.name},
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default Detalle;
