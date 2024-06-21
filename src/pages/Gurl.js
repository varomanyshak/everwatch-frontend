import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector } from 'recharts';

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

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

const Gurl = () => {
  const TableData = JSON.parse(useSelector((state) => state.counter.value)).Gurl
  // console.log(TableData);

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
  const PieData = PieAry(groupByHost(TableData));













  return (
    <>
      <Row style={{ height: '500px' }}>
        <Col>
          <GurlChart data={PieData} />
        </Col>
      </Row>
      <Row style={{ height: '800px', marginTop: "30px" }}>
        <GurlGrid data={TableData} />
      </Row>
      {
        TableData.length == 0 ? (
          <center>
            <h3>Token expired</h3>
          </center>
        ) : ('')
      }
    </>
  )
};

export default Gurl;

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


const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} >
        {payload.host}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`URL ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const GurlChart = (props) => {
  const [state, setState] = useState({ activeIndex: 0, });

  const onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={state.activeIndex}
          activeShape={renderActiveShape}
          data={props.data}
          // cx="20%"
          // cy="20%"
          innerRadius={100}
          outerRadius={200}
          fill="#8884d8"
          dataKey="count"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
