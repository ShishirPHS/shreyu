import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="mt-3">
      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-3">Edit Profile</h4>

          <Form className="form-horizontal">
            <Row>
              <Col md={12}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={2} htmlFor="simpleinput">
                    User Name
                  </Form.Label>
                  <Col lg={10}>
                    <Form.Control
                      type="text"
                      id="simpleinput"
                      defaultValue="Lab Admin"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={2} htmlFor="example-email">
                    Email
                  </Form.Label>
                  <Col lg={10}>
                    <Form.Control
                      type="email"
                      id="example-email"
                      name="example-email"
                      defaultValue="super_admin@lab.com"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={2} htmlFor="example-password">
                    Password
                  </Form.Label>
                  <Col lg={10}>
                    <Form.Control
                      type="password"
                      id="example-password"
                      placeholder="Password"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={2} htmlFor="example-password">
                    Confirm Password
                  </Form.Label>
                  <Col lg={10}>
                    <Form.Control
                      type="password"
                      id="example-password"
                      placeholder="Confirm Password"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={2} htmlFor="example-fileinput">
                    Choose Your Signature
                  </Form.Label>
                  <Col lg={10}>
                    <Form.Control type="file" id="example-fileinput" />
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
