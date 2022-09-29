import { Container, ListGroupItem, Row, Col, Badge } from "react-bootstrap";
import EmpleadoAvatar from './EmpleadoAvatar'
const EmpleadoRow = () => {
    return (
        <>
        <ListGroupItem>
            <Container>
                <Row>
                    <Col>
                    <EmpleadoAvatar>
                    </EmpleadoAvatar>
                    </Col>
                    <Col>
                    <p className="fw-bold">H</p>
                    <p>H</p>
                    <Badge pill bg='primary'>h</Badge>
                    </Col>
                </Row>
            </Container>
        </ListGroupItem>
        </>
    );
};

export default EmpleadoRow;