
import React, { useState } from "react";
import { Row, Col, Nav, Form, Card, Image, Navbar, Dropdown, Container, ListGroup, InputGroup, Button } from '@themesberg/react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import common from "../config/common";

const calc_twelve = (data, hours) => {
  let newary = []
  data.forEach(element => {
    newary.push(element.timestamp)
  });
  newary.sort()
  let count = 0
  const t1 = new Date(newary[0]) // your initial time
  for (let i = 0; i < newary.length; i++) {
    const ct = new Date(newary[i]);
    let diff = Math.abs(t1 - ct);
    const SEC = 1000, MIN = 60 * SEC, HRS = 60 * MIN
    const humanDiff = `${Math.floor(diff / HRS)}`
    if (humanDiff < hours) {
      count++
    } else {
      break
    }
  }
  return count
}

const header_info = (data) => {
  let dataAry = JSON.parse(data);
  let all_data = dataAry.length
  let last = common.newScan(dataAry)
  let Htwelve = calc_twelve(dataAry, 12)
  return {
    all: all_data,
    last: last,
    twelve: Htwelve
  }
}

export default (props) => {
  const data = useSelector((state) => state.dataAry.value)
  const title = useSelector((state)=> state.title.value)

  const res_info = header_info(data);
  const navStyle = {
    position: 'fixed',
    top: '0',
    height: '90px',
    backgroundColor: '#f5f8fb',
    width: '100%',
    zIndex: '1000',
    display: 'flex',
    alignItem: 'center',
    marginLeft: '-15px',
    padding:'0 15px',
    paddingTop:'16px'

  }
  const rowStyle = {
    width: 'calc(100% - 280px)',
    display: 'flex',
    alignItem: 'center'
  }

  return (
    <div style={navStyle} >
      <Row style={rowStyle}>
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <div>Total: {res_info.all}</div>
            <div>After last scan : {res_info.last}</div>
            <div>On the last 12 hours : {res_info.twelve}</div>
          </div>
        </Col>
        <Col className='d-flex justify-content-center' style={{ alignItems: 'center' }} ><h1>{title}</h1></Col>
      </Row>
    </div>
  )
}
