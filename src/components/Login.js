// Librerias
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, Navigate } from "react-router-dom";

// React-Bootstrap
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
    const navigate = useNavigate();

    // Crear subclass de Swal para usar sus funciones
    const MySwal = withReactContent(Swal);

    // Handler con validaciones para cuando se haga un POST con los valores del formulario que introduce el usuario
    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // regex que comprueba que se esta introduciendo un email con caracteres validos
        const regexEmail = /\S+@\S+\.\S+/;

        // Condicionales =>
        // Condicional 1: comprueba que no hayan espacios sin completar
        if (email === "" || password === "") {
            MySwal.fire({
                title: <p>No debes dejar espacios sin completar.</p>,
            });
            return;
        }
        // Condicional 2: usa el regex para comprobar el mail ingresado
        if (email !== "" && !regexEmail.test(email)) {
            MySwal.fire({
                title: <p>Ingrese un email valido.</p>,
            });
            return;
        }
        // Condicional 3: Establece las unicas credenciales validas
        if (email !== "challenge@alkemy.org" || password !== "react") {
            MySwal.fire({
                title: <p>Credenciales invalidas.</p>,
            });
            return;
        }

        // Se hace el POST con los valores a la URL en caso de que se hayan introducido previamente los valores correctos
        axios
            .post("http://challenge-react.alkemy.org", { email, password })
            .then((res) => {
                const myToken = res.data.token;
                MySwal.fire({
                    title: <p>Login exitoso.</p>,
                });
                // Guarda en el sessionStorage el token de usuario que devuelve el POST
                sessionStorage.setItem("token", myToken);
                // redirecciona al listado
                navigate("/listado");
            });
    };
    // Recupero, en caso de tenerlo, al token para usarlo en el renderizado
    const token = sessionStorage.getItem("token");

    // Renderizado condicional, dependiente del "token"
    if (token) {
        return <Navigate to={"/listado"} />;
    }
    return (
        <Container className="py-1">
            <h2 className="fw-bold pb-1">Login.</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Direccion de email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Ingresar email"
                    />
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Ingresar contraseña"
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Ingresar
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
