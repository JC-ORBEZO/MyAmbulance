import { Row,Col,Form,Button } from "react-bootstrap";
import styled from "styled-components";
import "./Main.css";

const NewRow=styled(Row)`

`;

/*const NewCol=styled(Col)`
opacity:1;
`;*/
const Main = () => {
    return ( 
    <NewRow className="justify-content-around align-middle">
        <Col md={5} className="text-center mt-4">
            <i className="fas fa-ambulance icono"></i>
            <p className="parrafo1">Servicio de Alquiles de Ambulancias en Buenos Aires</p>
            <p className="parrafo1">********</p>
            <p className="parrafo1">Ofrecemos servicios para eventos sociales y deportivos.</p>
            <p className="parrafo1">********</p>
            <p className="parrafo1">Traslados a centro de vacunación COVID</p>
        </Col>                
        <Col md={5} className="mt-4">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>*Nombre y Apellido:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>*Teléfono:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>*Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>*Ciudad:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Enviar
                </Button>
                <p>Los campos marcados con * son obligatorios</p>
            </Form>
        </Col>
    </NewRow> );
}
 
export default Main;