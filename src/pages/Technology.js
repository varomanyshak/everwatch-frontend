import React, { useState } from 'react';
import { Col, Row, } from '@themesberg/react-bootstrap';
import { useSelector, } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  useMemo,
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import common from '../config/common';

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

const Technology = () => {
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
    </>
  )
};

export default Technology;

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
  const columnDefs = [
    { field: "host", rowGroupIndex: 1, hide: true },
    { field: "technology"},
    { field: "url" },
    { field: "module" },
    { field: "timestamp" },
  ]

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

  const onGridReady = ()=>{
    setRowData(props.data);
  }

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