import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css";
// import { Button, Col, Row, Table } from "react-bootstrap";
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
    prop: "_data",
    title: "URL"
  },
  {
    prop: "_stats_recorded",
    title: "Last Update"
  },
  {
    prop: "timestamp",
    title: "Score",
    isSortable: true
  },
  {
    prop: "button",
    cell: (row) => (
      <Button
        variant="outline-primary"
        size="sm"
      // onClick={() => {
      //   alert(`${row.username}'s score is ${row.score}`);
      // }}
      >
        Click me
      </Button>
    )
  }
];

const CodeRepo = (props) => {
  useEffect(() => {
    console.log(props.Tabledata);
  }, [])

  return (
    <>
      <center>
        <h2>Code Repository</h2>
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
    </>
  )
};

export default CodeRepo;