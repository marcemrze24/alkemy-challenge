// Librerias
import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

// React-Bootstrap
import { Container } from "react-bootstrap";

// CSS style
import "./css/App.css";

function App() {
    return (
        <>
            <Header />
            {/* // Main content start */}
            <Container className="py-4 my-1">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/listado" element={<Listado />} />
                </Routes>
            </Container>
            {/* // Main content end */}
            <Footer />
        </>
    );
}

export default App;
