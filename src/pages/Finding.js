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
import common from '../config/common';

import DetailModal from '../components/DetailModal';

const Finding = () => {
  const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).Find;
  console.log(Tabledata[0]);

  console.log(common.FindExtractValus(Tabledata));


  return (
    <>
      <Row className='p-5'>



      </Row>
    </>
  )
};

export default Finding;