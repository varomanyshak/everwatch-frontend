import React, { useEffect } from 'react';
import { Col, Row, Button, Table,  } from '@themesberg/react-bootstrap';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,

  TableHeader
} from "react-bs-datatable";

const STORY_HEADERS = [
  {
    prop: "module",
    title: "Module",
    isSortable: true
  },
  {
    prop: "_data",
    title: "URL"
  },
  {
    prop: "_stats_recorded",
    title: "Last Update"
  },
  {
    prop: "timestamp",
    title: "Time",
    isSortable: true
  },
  {
    prop: "button",
    cell: (row) => (
      <Button
        variant="outline-primary"
        size="sm"
      >
        Detail
      </Button>
    )
  }
];

const CodeRepo = (props) => {
  useEffect(() => {
  }, [])

  return (
    <>
      <DatatableWrapper
        body={props.Tabledata}
        headers={STORY_HEADERS}
        paginationOptionsProps={{
          initialState: {
            rowsPerPage: 10,
            options: [5, 10, 15, 20]
          }
        }}
      >
        <Row className="mb-4 p-2">
          <Col
            xs={12}
            lg={4}
            className="d-flex flex-col justify-content-end align-items-end"
          >
            <Filter />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
          >
            <PaginationOptions />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-end align-items-end"
          >
            <Pagination />
          </Col>
        </Row>
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </DatatableWrapper>
    </>
  )
};

export default CodeRepo;