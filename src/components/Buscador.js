// librerias
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

// React-Bootstrap
import { Button, Form } from "react-bootstrap";

const Buscador = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const submitHandler = (e) => {
        e.preventDefault();

        // recupero el value dentro del input y lo guardo en una variable
        const keyword = e.currentTarget.keyword.value.trim();
        // condiciones del buscador
        if (keyword.length < 4) {
            MySwal.fire({
                title: <p>Debes ingresar mas de 4 caracteres.</p>,
            });
            return;
        } else {
            navigate(`/resultados?keyword=${keyword}`);
            e.currentTarget.keyword.value = "";
        }
    };

    return (
        <Form className="my-1" onSubmit={submitHandler}>
            <Form.Group className="d-flex" controlId="formularioBuscador">
                <Form.Control
                    name="keyword"
                    type="text"
                    placeholder="Ingrese titulo..."
                />
                <Button variant="outline-secondary" type="submit">
                    Buscar
                </Button>
            </Form.Group>
        </Form>
    );
};

export default Buscador;
