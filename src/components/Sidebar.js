
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Container, Row, Col } from '@themesberg/react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


export default () => {
  return (
    <>

      <Nav variant="underline" defaultActiveKey="/home" activeKey={1} className="flex-column" >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
          <NavLink to="/home1">Active</NavLink>
        <Nav.Item>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home2">Active</Nav.Link>
        </Nav.Item>

        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav>
    </>
  )

}
