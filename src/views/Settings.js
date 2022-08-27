import {
  Card,
  Col,
  Row,
} from "react-bootstrap";

const Settings = () => {
  return (
    <>
      <h1 className="h2 my-5">Settings</h1>
      <Row className="row">
        <Col md={8}>
          <Card className="shadow-sm mb-2-sm">
            <Card.Body className="p-4">
              <h3 className="h4">Lorem Ipsum Dolor</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit non
                perspiciatis, obcaecati quae itaque molestias, eius quas eaque.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Settings;
