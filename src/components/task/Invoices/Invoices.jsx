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
    Header: "Barcode",
    sort: false,
  },
  {
    Header: "Client Code",
    sort: true,
  },
  {
    Header: "Client Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Subtotal",
    sort: true,
  },
  {
    Header: "Discount",
    sort: true,
  },
  {
    Header: "Total",
    sort: true,
  },
  {
    Header: "Paid",
    sort: true,
  },
  {
    Header: "Due",
    sort: true,
  },
  {
    Header: "Date",
    sort: true,
  },
  {
    Header: "Status",
    sort: false,
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

const Invoices = () => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Invoices Table</h4>

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

export default Invoices;
