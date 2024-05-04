import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import signatureImg from "./pngegg.png";
import PageTitle from "../../PageTitle";

const Profile = () => {
  const [validated, setValidated] = useState(false);

  /*
   * handle form submission
   */
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          {
            label: "Profile",
            path: "/components/myTaskProfile",
            active: true,
          },
        ]}
        title={" Profile"}
      />
      <div className="">
        <Card>
          <Card.Body>
            <h4 className="header-title mt-0 mb-3">Edit Profile</h4>

            <Form
              className="form-horizontal"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col md={12}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="validationCustom01"
                  >
                    <Form.Label column lg={2} htmlFor="simpleinput">
                      User Name
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        required
                        type="text"
                        id="simpleinput"
                        defaultValue="Lab Admin"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter User Name.
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="example-email">
                      Email
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        required
                        type="email"
                        id="example-email"
                        name="example-email"
                        defaultValue="super_admin@lab.com"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Email.
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="example-password">
                      Password
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        required
                        type="password"
                        id="example-password"
                        placeholder="Password"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Password.
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="example-password">
                      Confirm Password
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        required
                        type="password"
                        id="example-password"
                        placeholder="Confirm Password"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Confirm Password.
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="example-fileinput">
                      Choose Your Signature
                    </Form.Label>
                    <Col lg={10}>
                      <Form.Control
                        required
                        type="file"
                        id="example-fileinput"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Choose Your Signature.
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column lg={2} htmlFor="signature">
                      Signature
                    </Form.Label>
                    <Col lg={10}>
                      <img
                        style={{ width: "200px" }}
                        src={signatureImg}
                        alt="User's Signature"
                      />
                    </Col>
                  </Form.Group>
                  <Button className="mt-2" variant="primary" type="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
