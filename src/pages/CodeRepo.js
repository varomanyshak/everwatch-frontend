import React, { useState } from 'react';
import { Col, Row, Button, Table, } from '@themesberg/react-bootstrap';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";
import { useSelector } from 'react-redux'
import DetailModal from '../components/DetailModal';
import common from '../config/common';

const CodeRepo = (props) => {
  const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).CodeRepo
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
    _resolved_hosts: "0.0.0.0",
    _scope_distance: "",
    _source: {
      ip_address: "",
      module: "",
      tags: ""
    },
    _source_id: "",
    _stats_recorded: "",
    _tags: "",
    _type: ""
  });

  const listDetail = (list) => {
    setdetailObj(list)
    setModalShow(true)
  }

  const STORY_HEADERS = [
    {
      prop: "module",
      title: "Module",
      isSortable: true
    },
    {
      prop: "_BaseEvent__host",
      title: "Host",
      isSortable: true
    },
    {
      prop: "_data.url",
      title: "URL"
    },
    {
      prop: "",
      title: "IP Address",
      cell: (row) => {
        return common.extractIPAddress(row._resolved_hosts)
      }
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
          onClick={() => { listDetail(row) }}
        >
          Detail
        </Button>
      )
    }
  ];

  return (
    <>
      <DatatableWrapper
        body={Tabledata}
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
      <DetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={detailObj}
        type='coderepo'
      />
    </>
  )
};

export default CodeRepo;