import React from "react";
import {  Link  } from "react-router-dom";
import { useDispatch } from 'react-redux'

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';
import { inputTitle } from "../features/counter/titleSlice";

const Sidebar =  () => {
  const dispatch = useDispatch()
  const Reload =()=>{
    window.location.reload();
  }

  const changeRouter = (value) => {
    dispatch(inputTitle(value))
  }
  return (
    <CDBSidebar style={{}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />} className="logo" ><div onClick = {()=>Reload()} style={{ fontSize: '30px' }}>it tech</div></CDBSidebarHeader>
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
          <CDBSidebarMenuItem icon="th-large"><Link to="/org" onClick={() => changeRouter('Organization Indication')}>Organization Indication</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large"><Link to="/scan" onClick={() => changeRouter('Scanning Information')}>Scanning Information</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large"><Link to="/social" onClick={() => changeRouter('Social Profiles')}>Social Profiles</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">Storage Bucket</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="check"><Link to="/technology" onClick={() => changeRouter('Technology')}>Technology</Link></CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="th-large">WAF</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="check"><Link to="/g-url" onClick={() => changeRouter('General URL')}>General URL</Link></CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar