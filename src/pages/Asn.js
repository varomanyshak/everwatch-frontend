import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableColumnType,
  TableHeader
} from "react-bs-datatable";

const STORY_HEADERS = [
  {
    prop: "module",
    title: "Module",
    isSortable: true
  },
  {
    prop: "_data.subnet",
    title: "subnet"
  },
  {
    prop: "_data.country",
    title: "Country"
  },
  {
    prop: "_data.name",
    title: "Name"
  },
  {
    prop: "_source",
    title: "IP Address, Module, Tag"
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

const Asn = (props) => {
  useEffect(() => {
  }, [])

  return (
    <>
      <center>
        <h2>ASN Information</h2>
      </center>
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
      {
        props.Tabledata.length == 0 ? (
          <center>
            <h3>Token expired</h3>
          </center>
        ) : ('')
      }
    </>
  )
};

export default Asn;