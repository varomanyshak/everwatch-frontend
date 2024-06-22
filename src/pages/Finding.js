import React, { useState } from 'react';
import { Col, Row, } from '@themesberg/react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux'
import {
  useCallback,
  useMemo,
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

const Finding = () => {
  const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).Find;

  function groupByHost(data) {
    const groupedData = {};
    data.forEach(item => {
      const host = item['_BaseEvent__host'];
      if (!groupedData[host]) {
        groupedData[host] = 1
      } else {
        groupedData[host]++
      }
    });

    return groupedData;
  }
  const PieAry = (data) => {
    let PieAry = [];
    for (const key in data) {
      PieAry.push({
        host: key,
        count: data[key]
      })
    }
    return PieAry
  }
  const PieData = PieAry(groupByHost(Tabledata));

  return (
    <>
      <Row style={{ height: '500px' }}>
        <Col>
          <TechChart data={PieData} />
        </Col>
      </Row>
      <Row className="p-2" style={{ height: '800px', marginTop: "30px" }}>
        <GurlGrid data={Tabledata} />
      </Row>
    </>
  )
};

export default Finding;


const GurlGrid = (props) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "_BaseEvent__host", rowGroupIndex: 1, hide: true },
    { field: "_data" },
    { field: "_resolved_hosts" },
    { field: "module" },
    { field: "timestamp" },
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