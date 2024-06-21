import React, { useState, useEffect, Fragment } from 'react';
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
import { useSelector, useDispatch } from 'react-redux'
import { AgChartsReact } from "ag-charts-react";
import deepClone from "deepclone";
import newScan from '../config/common';
import DetailModal from '../components/DetailModal';

const OpenTcp = () => {
  const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).OpenTcp
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

  function printHostOccurrences(array, type) {
    const hostOccurrences = array.reduce((acc, item) => {
      acc[item[type]] = (acc[item[type]] || 0) + 1;
      return acc;
    }, {});

    let HostAry = []
    for (const host in hostOccurrences) {
      // console.log(`Host: ${host}, Occurrences: ${hostOccurrences[host]}`);
      HostAry.push({
        host: host,
        count: hostOccurrences[host]
        // quarter: "Q2'19",
        // iphone: 108,
      })

    }
    // console.log(HostAry);
    return HostAry;
  }
  const hostData = printHostOccurrences(Tabledata, "_BaseEvent__host")
  const portData = printHostOccurrences(Tabledata, "_port")
  const portBodyStyle = {
    gap: '10px',
    backgroundColor: '#192232',
    border: '2px solid #344054',
    borderRadius: '5px',
    padding: '20px',
    display: 'flex',
    flesWrap: 'wrap',
    margin: '0'
  }

  const STORY_HEADERS = [
    {
      prop: "_BaseEvent__host",
      title: "Host",
      isSortable: true
    },
    {
      prop: "_port",
      title: "Port",
      isSortable: true
    },
    {
      prop: "",
      title: "IP address",
      cell: (row) => {
        var host_str = `${row._resolved_hosts[0]}, ${row._resolved_hosts[1]}`
        return (host_str)
      },
      isSortable: true
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
          onClick={()=>listDetail(row)}
        >
          Detail
        </Button>
      )
    }
  ];

  return (
    <>
      <Row style={portBodyStyle}>
        <h3 style={{ color: "white", marginBottom: '0' }}>Tcp Port</h3>
        <hr style={{ color: 'white' }} />
        {portData.map((item, index) => (
          <div id={item.count} key={index} className='portTile'>{item.host}</div>
        ))}
      </Row>
      <Row style={{ height: '500px' }}>
        {/* <Col>
          <ChartExample2 data={hostData} />
        </Col> */}
        <Col style={{ margin: '20px 0' }}>
          <ChartHostPie data={hostData} />
        </Col>
      </Row>
      <Row className='p-5'>
        <DatatableWrapper
          body={Tabledata}
          headers={STORY_HEADERS}
          paginationOptionsProps={{
            initialState: {
              rowsPerPage: 10,
              options: [5, 10, 15, 20, 50, 100]
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
      </Row>
      {
        Tabledata.length == 0 ? (
          <center>
            <h3>Token expired</h3>
          </center>
        ) : ('')
      }
      <DetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={detailObj}
        type='asn'
      />
    </>
  )
};

export default OpenTcp;


function getDataPie() {
  return [
    { asset: "Stocks", amount: 60000 },
    { asset: "Bonds", amount: 40000 },
    { asset: "Cash", amount: 7000 },
    { asset: "Real Estate", amount: 5000 },
    { asset: "Commodities", amount: 3000 },
  ];
}
function getData() {
  return [
    {
      quarter: "Q1'18",
      iphone: 140,
      mac: 16,
      ipad: 14,
      wearables: 12,
      services: 20,
    },
    {
      quarter: "Q2'18",
      iphone: 124,
      mac: 20,
      ipad: 14,
      wearables: 12,
      services: 30,
    },
    {
      quarter: "Q3'18",
      iphone: 112,
      mac: 20,
      ipad: 18,
      wearables: 14,
      services: 36,
    },
    {
      quarter: "Q4'18",
      iphone: 118,
      mac: 24,
      ipad: 14,
      wearables: 14,
      services: 36,
    },
    {
      quarter: "Q1'19",
      iphone: 124,
      mac: 18,
      ipad: 16,
      wearables: 18,
      services: 26,
    },
    {
      quarter: "Q2'19",
      iphone: 108,
      mac: 20,
      ipad: 16,
      wearables: 18,
      services: 40,
    },
    {
      quarter: "Q3'19",
      iphone: 96,
      mac: 22,
      ipad: 18,
      wearables: 24,
      services: 42,
    },
    {
      quarter: "Q4'19",
      iphone: 104,
      mac: 22,
      ipad: 14,
      wearables: 20,
      services: 40,
    },
  ];
}

const ChartExample = (props) => {
  const [options, setOptions] = useState({
    title: {
      text: "TCP_Port",
    },
    // subtitle: {
    //   // text: "In Billion U.S. Dollars",
    // },
    data: props.data,
    series: [
      {
        type: "bar",
        xKey: "host",
        yKey: "count",
        yName: "count",
        stacked: true,
      },

    ],
  });

  return <AgChartsReact options={options} />;
};
const ChartExample2 = (props) => {
  const [options, setOptions] = useState({
    title: {
      text: "host",
    },
    // subtitle: {
    //   text: "In Billion U.S. Dollars",
    // },
    data: props.data,
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "host",
        yKey: "count",
        yName: "count",
      },
    ],
  });

  return <AgChartsReact options={options} />;
};
const ChartHostPie = (props) => {
  const [options, setOptions] = useState({
    data: props.data,
    title: {
      text: "Host",
    },
    series: [
      {
        type: "pie",
        angleKey: "count",
        legendItemKey: "host",
      },
    ],
  });

  return <AgChartsReact options={options} />;
};