import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
} from 'cdbreact';
import { inputTitle } from "../features/counter/titleSlice";

export default () => {
  const dispatch = useDispatch()

  const changeRouter = (value) => {
    dispatch(inputTitle(value))
  }
  return (
    <CDBSidebar style={{}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><div style={{ fontSize: '30px' }}>it tech</div></CDBSidebarHeader>
      <CDBSidebarContent style={{ 'flexGrow': '1' }}>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large"><Link to="/" onClick={() => changeRouter('ASN Information')}>ASN Information</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large"><Link to="/azure" onClick={() => changeRouter('Azure Tenant')}>Azure Tenant</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note"><Link to="/geolocation" onClick={() => changeRouter('Geolocation')}>Geolocation</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card"><Link to="/coderepo" onClick={() => changeRouter('Code Repository')}>Code Repository</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="user"><Link to="/dns-name" onClick={() => changeRouter('DNS Name')}>DNS Name</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="envelope"><Link to="/email-address" onClick={() => changeRouter('Email Address')}>Email Address</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="search"><Link to="/finding" onClick={() => changeRouter('Finding')}>Finding</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="check"><Link to="/open-tcp" onClick={() => changeRouter('Open TCP Port')}>Open TCP Port</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Organization Indication</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Scanning Information</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Social Profiles</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Storage Bucket</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="check"><Link to="/technology" onClick={() => changeRouter('Technology')}>Technology</Link></CDBSidebarMenuItem>
          {/* <CDBSidebarMenuItem icon="th-large">Web Application Firewall (WAF)</CDBSidebarMenuItem> */}
          <CDBSidebarMenuItem icon="th-large">WAF</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="check"><Link to="/g-url" onClick={() => changeRouter('General URL')}>General URL</Link></CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};