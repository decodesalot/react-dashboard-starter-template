import { Button, Container, Card, Col, Form, Row } from 'react-bootstrap';
const Login = ({handleLogin}) => {
    return (
      <>
        <Container className="centered">
          <Row>
            <Col md={4} className="m-md-auto">
              <Card className="shadow-sm mb-2-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-5">
                    <img
                      src="https://via.placeholder.com/240x60/454752/ffffff?text=Placeholder"
                      alt=""
                    />
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="w-100 py-3 mt-3" onClick={handleLogin}>
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default Login;