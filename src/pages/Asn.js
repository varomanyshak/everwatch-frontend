import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import Modal from 'react-bootstrap/Modal';
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={detailObj}
      />
    </>
  )
};

export default Asn;



const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ 'wordBreak': 'break-all' }} className='p-2'>
          {props.data.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Card.Title>
              <Row>
                <Col>
                  ASN  :
                </Col>
                <Col>
                  {props.data._data.asn}
                </Col>
                <Col>
                  Country  :
                </Col>
                <Col>
                  {props.data._data.country}
                </Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>Description:{props.data._data.description}</Col>
                <Col>Name:{props.data._data.name}</Col>
                <Col>Subnet:{props.data._data.subnet}</Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Row className='p-2'>
          <Col>
            <Row>
              <Col><h6>Confidence</h6></Col>
              <Col>{props.data.confidence}</Col>
            </Row>
            <Row>
              <Col><h6>Module</h6></Col>
              <Col>{props.data.module}</Col>
            </Row>
            <Row>
              <Col><h6 >Scan_id</h6></Col>
              <Col style={{ 'wordBreak': 'break-all' }}>{props.data.scan_id}</Col>
            </Row>
            <Row>
              <Col><h6>Timestamp</h6></Col>
              <Col>{props.data.timestamp}</Col>
            </Row>
            <Row>
              <Col><h6>BaseEvent_words</h6></Col>
              <Col>{props.data._BaseEvent__words}</Col>
            </Row>
            <Row>
              <Col><h6>Dummy</h6></Col>
              <Col>{props.data._dummy}</Col>
            </Row>
            <Row>
              <Col><h6>Hash</h6></Col>
              <Col>{props.data._hash}</Col>
            </Row>
            <Row>
              <Col><h6>Internal</h6></Col>
              <Col>{props.data._internal}</Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col><h6>Module_priority</h6></Col>
              <Col>{props.data._module_priority}</Col>
            </Row>
            <Row>
              <Col><h6>Port</h6></Col>
              <Col>{props.data._port}</Col>
            </Row>
            <Row>
              <Col><h6>Priority</h6></Col>
              <Col>{props.data._priority}</Col>
            </Row>
            <Row>
              <Col><h6>Resolved_hosts</h6></Col>
              <Col>{props.data._resolved_hosts}</Col>
            </Row>
            <Row>
              <Col><h6>Scope_distance</h6></Col>
              <Col>{props.data._scope_distance}</Col>
            </Row>
            <Row>
              <Col><h6>Source</h6></Col>
              <Col>{props.data._source}</Col>
            </Row>
            <Row>
              <Col><h6>Stats_recorded</h6></Col>
              <Col>{props.data._stats_recorded}</Col>
            </Row>
            <Row>
              <Col><h6>Tags</h6></Col>
              <Col>{props.data._tags}</Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal >
  );
}