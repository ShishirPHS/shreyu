// components
import { Card, Col, Row } from "react-bootstrap";
import Table from "../../../components/Table";

//dummy data
import { records as data } from "../../../pages/tables/data";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Option",
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

const CultureOptions = () => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Culture Options Table</h4>

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

export default CultureOptions;
