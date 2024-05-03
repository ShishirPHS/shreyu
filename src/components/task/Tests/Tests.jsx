// components
import { Card, Col, Row } from "react-bootstrap";
import Table from "../../../components/Table";

//dummy data
import { records as data } from "../../../pages/tables/data";
import { Link } from "react-router-dom";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Shortcut",
    sort: false,
  },
  {
    Header: "Sample Type",
    sort: false,
  },
  {
    Header: "Price",
    sort: true,
  },
  {
    Header: "Action",
    sort: false,
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

const Tests = () => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h4 className="header-title mb-3">Tests Table</h4>
                <Link to="/components/myTaskTestCreate">
                  <button className="btn btn-primary d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span style={{ marginLeft: "10px" }}>Create</span>
                  </button>
                </Link>
              </div>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Tests;
