// Librerias
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Componentes
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

// React-Bootstrap
import { Container } from "react-bootstrap";

// CSS style
import "./css/App.css";
import Favoritos from "./components/Favoritos";

function App() {
    const [favs, setFavs] = useState([]);
    useEffect(() => {
        const favsInLocal = JSON.parse(sessionStorage.getItem("favs"));
        setFavs(favsInLocal);
    }, []);

    //
    const addOrRemoveFavs = (e) => {
        e.preventDefault();
        // cuando se carge la app, necesito comprobar los datos que tengo guardados en sessionStorage
        // en caso de haber items dentro del lS, los recupero en una variable, caso contrario creo un array vacio
        const initFavs = JSON.parse(sessionStorage.getItem("favs")) || [];
        // variables para obtener datos de cada pelicula segun en boton que clickee
        const btn = e.currentTarget;
        const parent = btn.parentElement;
        const imgURL = parent.querySelector("img").getAttribute("src");
        const title = parent.querySelector(".card-title").innerText;
        const description = parent.querySelector(".card-text").innerText;
        // objeto con la informacion necesaria para guardar en favoritos
        const movieData = {
            imgURL,
            title,
            description,
            id: btn.dataset.movieId,
        };
        // compruebo si la pelicula está, o no está, dentro de initFavs
        const movieInFavs = initFavs.find((movie) => {
            return movie.id === movieData.id;
        });

        // caso primero: la agrego a initFavs y actualizo en el storage
        // caso segundo: la elimino de initFavs y actualizo en el storage
        if (!movieInFavs) {
            initFavs.push(movieData);
            sessionStorage.setItem("favs", JSON.stringify(initFavs));
            setFavs(initFavs);
            console.log("Se agrego la pelicula a favs.");
        } else {
            const moviesLeft = initFavs.filter((movie) => {
                return movie.id !== movieData.id;
            });
            console.log(moviesLeft);
            sessionStorage.setItem("favs", JSON.stringify(moviesLeft));
            setFavs(moviesLeft);
            console.log("Se elimino la pelicula");
        }
    };
    return (
        <>
            <Header />
            {/* // Main content start */}
            <Container className="py-4 my-1">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/listado"
                        element={<Listado addOrRemoveFavs={addOrRemoveFavs} />}
                    />
                    <Route path="/detalle" element={<Detalle />} />
                    <Route
                        path="/resultados"
                        element={
                            <Resultados addOrRemoveFavs={addOrRemoveFavs} />
                        }
                    />
                    <Route
                        path="favoritos"
                        element={
                            <Favoritos
                                favs={favs}
                                addOrRemoveFavs={addOrRemoveFavs}
                            />
                        }
                    />
                </Routes>
            </Container>
            {/* // Main content end */}
            <Footer />
        </>
    );
}

export default App;
