import { Row,Col} from "react-bootstrap";
/*import styled from "styled-components";

const NewForm=styled(Form)`
    display:flex;
    flex-direction:column;
    align-items:stretch;
`;*/
const Header = () => {
    return (
            <Row className="justify-content-center">
                <Col md={6}>
                    <img src="https://sieleckimingo.com/wp-content/uploads/2020/10/logo-3p.png" alt="Logo" width={550} height={100}/>
                </Col>
            </Row>
     );
}
 
export default Header;