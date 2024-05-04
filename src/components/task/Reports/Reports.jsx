// components
import { Card, Col, Row } from "react-bootstrap";
import Table from "../../../components/Table";

//dummy data
import { records as data } from "../../../pages/tables/data";
import PageTitle from "../../PageTitle";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Barcode",
    sort: true,
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
    Header: "gender",
    sort: false,
  },
  {
    Header: "Age",
    sort: false,
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: true,
  },
  {
    Header: "Tests",
    sort: false,
  },
  {
    Header: "Date",
    sort: true,
  },
  {
    Header: "Done",
    sort: true,
  },
  {
    Header: "Signed",
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

const Reports = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          {
            label: "Reports",
            path: "/components/myTaskReports",
            active: true,
          },
        ]}
        title={" Reports"}
      />
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3">Reports Table</h4>

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
    </>
  );
};

export default Reports;
