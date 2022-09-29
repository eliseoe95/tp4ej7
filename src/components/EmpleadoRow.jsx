import { Container, ListGroupItem, Row, Col, Badge } from "react-bootstrap";
import EmpleadoAvatar from './EmpleadoAvatar'
const EmpleadoRow = ({empleado}) => {
    return (
        <ListGroupItem>
            <Container>
                <Row>
                        <Col>
                        <EmpleadoAvatar empleado={empleado} >
                        </EmpleadoAvatar>
                        </Col>
                        <Col>
                        <p className="fw-bold">{empleado.fullName}</p>
                        <p>{empleado.title}</p>
                        <Badge pill bg='primary'>{empleado.department}</Badge>
                        </Col>
                </Row>
            </Container>
        </ListGroupItem>
    );
};

export default EmpleadoRow;