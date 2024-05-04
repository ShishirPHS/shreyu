import { Card, Col, Form, Row } from "react-bootstrap";
import PageTitle from "../../../PageTitle";
import { useState } from "react";
import "./InvoiceCreate.css";

import Table from "../../../../components/Table";

//dummy data
import { records as data } from "../../../../pages/tables/data";

const columns = [
  {
    Header: "Test Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Price",
    sort: true,
  },
];

const columns1 = [
  {
    Header: "Culture Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Price",
    sort: true,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const InvoiceCreate = () => {
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
          { label: "Invoices", path: "/components/myTaskInvoices" },
          {
            label: "Invoice",
            path: "/components/myTaskInvoiceCreate",
            active: true,
          },
        ]}
        title={"Invoice"}
      />
      <div>
        <Form
          className="form-horizontal"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          {/* select branches */}
          <Card>
            <Card.Body>
              <h4 className="header-title mt-0 mb-3">Select Branch</h4>
              <Row>
                <Col md>
                  <Form.Select aria-label="Floating label select example">
                    <option>Select Tests Branch</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* patient info */}
          <Card>
            <Card.Body>
              <h4 className="header-title mt-0 mb-1">Patient Info</h4>
              <Row>
                <Col lg={3}>
                  <Form.Label column>Code</Form.Label>
                  <Form.Select aria-label="Floating label select example">
                    <option>Select Code</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Name</Form.Label>
                  <Form.Select aria-label="Floating label select example">
                    <option>Client Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Date of Birth</Form.Label>
                  <input
                    class="form-control"
                    type="text"
                    id="dob"
                    disabled="disabled"
                  ></input>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Phone</Form.Label>
                  <input
                    class="form-control"
                    id="phone"
                    type="text"
                    disabled="disabled"
                  ></input>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Email</Form.Label>
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    disabled="disabled"
                  ></input>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Gender</Form.Label>
                  <input
                    class="form-control"
                    id="gender"
                    type="text"
                    disabled="disabled"
                  ></input>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Address</Form.Label>
                  <input
                    class="form-control"
                    id="address"
                    type="text"
                    disabled="disabled"
                  ></input>
                </Col>
                <Col lg={3}>
                  <Form.Label column>Doctor</Form.Label>
                  <Form.Select aria-label="Floating label select example">
                    <option>Doctor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <div className="col-lg-6">
              <Col>
                <Card>
                  <Card.Body>
                    <h4 className="header-title mt-0 mb-1">Tests</h4>
                    <Row>
                      <Table
                        columns={columns}
                        data={data}
                        pageSize={5}
                        sizePerPageList={sizePerPageList}
                        isSortable={true}
                        pagination={true}
                        isSearchable={true}
                      />
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </div>

            <div className="col-lg-6">
              <Col>
                <Card>
                  <Card.Body>
                    <h4 className="header-title mt-0 mb-1">Cultures</h4>
                    <Row>
                      <Table
                        columns={columns1}
                        data={data}
                        pageSize={5}
                        sizePerPageList={sizePerPageList}
                        isSortable={true}
                        pagination={true}
                        isSearchable={true}
                      />
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default InvoiceCreate;
