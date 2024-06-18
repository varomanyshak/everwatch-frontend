import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableColumnType,
  TableHeader
} from "react-bs-datatable";
import newScan from '../confgi/common';
import DetailModal from '../components/DetailModal';
import "bootstrap/dist/css/bootstrap.css";


const Asn = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [detailObj, setdetailObj] = useState({
    confidence: "",
    id: "",
    module: "",
    parsed: "",
    scan: "",
    scan_id: "",
    scans: "",
    timestamp: "",
    _BaseEvent__host: "",
    _BaseEvent__words: "",
    _data: {
      asn: "",
      country: "",
      description: "",
      name: "",
      subnet: ""
    },
    _dummy: "",
    _hash: "",
    _id: "",
    _internal: "",
    _module_priority: "",
    _port: "",
    _priority: "",
    _resolved_hosts: "",
    _scope_distance: "",
    _source: "",
    _source_id: "",
    _stats_recorded: "",
    _tags: "",
    _type: ""
  });

  const listDetail = (list) => {
    setdetailObj(list)
    setModalShow(true)
  }


  useEffect(() => {
    // console.log(props.Tabledata);
  }, [])


  const STORY_HEADERS = [
    {
      prop: "module",
      title: "Module",
      isSortable: true
    },
    {
      prop: "",
      title: "Data",
      cell: (row) => (
        <>
          <Card className='Asn-card' onClick={() => listDetail(row)}>
            <Card.Body className='p-2' >
              <Card.Title style={{ fontSize: '13px' }}>Country : {row._data.country}</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>
                {row._data.name}<br />
                {row._data.subnet}
                {row._data.subnet}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )
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
          onClick={() => listDetail(row)}
        >
          Detail
        </Button>
      )
    }
  ];
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-end">
          <Card style={{ 'marginTop': '-40px' }}>
            <Card.Body>
              <Card.Title>Total : {props.Tabledata.length}</Card.Title>
              <Card.Text>
                New : {newScan(props.Tabledata)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center' ><h1>ASN Information</h1></Col>
        <Col></Col>
      </Row>

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

      <DetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={detailObj}
        type = 'asn'
      />
    </>
  )
};

export default Asn;