import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  useCallback,
  useMemo,
  useRef,
  StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import DetailModal from '../components/DetailModal';
import common from '../config/common';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

const Technology = () => {
  const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).ASN
  const Tech = JSON.parse(useSelector((state) => state.counter.value)).Technology
  const ChangeChartData = (data) => {
    let ChartAry = [];
    for (const key in data) {
      ChartAry.push({
        host: key,
        count: data[key].length
      })
    }
    return ChartAry
  }
  const ChartAry = ChangeChartData(common.TechGroupHost(Tech));
  const TableAry = common.ChangeTechTableData(Tech);
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

  return (
    <>
      <Row style={{ height: '500px' }}>
        <Col>
          <TechChart data={ChartAry} />
        </Col>
      </Row>
      <Row style={{height:'700px', marginTop:"30px"}}>
        <TechGrid data = {TableAry}/>
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

export default Technology;

const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothingwefwefwe";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        background: '#fff7',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0 5px 15px #19223293'

      }}>
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};
const TechChart = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="host" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="count" barSize={35} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

const TechGrid = (props) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "host", rowGroupIndex: 1, hide: true },
    { field: "technology"},
    { field: "url" },
    { field: "module" },
    { field: "timestamp" },
    // { field: "bronze" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 250,
    };
  }, []);

  const onGridReady = useCallback((params) => {
      setRowData(props.data);
    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .then((resp) => resp.json())
    //   .then((data) => setRowData(data));
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={gridStyle}
        className={
          "ag-theme-quartz-dark"
        }
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          groupDisplayType={"singleColumn"}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};