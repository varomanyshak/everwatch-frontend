import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';
import { inputTitle } from "../features/counter/titleSlice";

const Sidebar = () => {
  const dispatch = useDispatch()
  const Reload = () => {
    window.location.reload();
  }

  const changeRouter = (value, index) => {
    dispatch(inputTitle(value))
    activeSidebar(index)
  }


  const activeSidebar = (index) => {
    var btns = document.getElementsByClassName("categorybtn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].className = btns[i].className.replace(" active-category", "");
    }
    btns[index].className += " active-category";
  }


  return (
    <CDBSidebar style={{}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />} className="logo" ><div onClick={() => Reload()} style={{ fontSize: '30px' }}>it tech</div></CDBSidebarHeader>
      <CDBSidebarContent style={{ 'flexGrow': '1' }}>
        <CDBSidebarMenu>
          <Link className="categorybtn active-category" to="/" onClick={() => changeRouter('ASN Information', 0)}><CDBSidebarMenuItem icon="th-large">ASN Information</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/azure" onClick={() => changeRouter('Azure Tenant', 1)}><CDBSidebarMenuItem icon="th-large">Azure Tenant</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/geolocation" onClick={() => changeRouter('Geolocation', 2)}><CDBSidebarMenuItem icon="sticky-note">Geolocation</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/coderepo" onClick={() => changeRouter('Code Repository', 3)}><CDBSidebarMenuItem icon="credit-card">Code Repository</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/dns-name" onClick={() => changeRouter('DNS Name', 4)}><CDBSidebarMenuItem icon="user">DNS Name</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/email-address" onClick={() => changeRouter('Email Address', 5)}><CDBSidebarMenuItem icon="envelope">Email Address</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/finding" onClick={() => changeRouter('Finding', 6)}> <CDBSidebarMenuItem icon="search">Finding</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/open-tcp" onClick={() => changeRouter('Open TCP Port', 7)}><CDBSidebarMenuItem icon="check">Open TCP Port</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/org" onClick={() => changeRouter('Organization Indication', 8)}><CDBSidebarMenuItem icon="th-large">Organization Indication</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/scan" onClick={() => changeRouter('Scanning Information', 9)}><CDBSidebarMenuItem icon="th-large">Scanning Information</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/social" onClick={() => changeRouter('Social Profiles', 10)}><CDBSidebarMenuItem icon="th-large">Social Profiles</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/storage" onClick={() => changeRouter('Storage Bucket', 11)}><CDBSidebarMenuItem icon="th-large">Storage Bucket</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/technology" onClick={() => changeRouter('Technology', 12)}><CDBSidebarMenuItem icon="check">Technology</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/WAF" onClick={() => changeRouter('Web Application Firewall', 13)}><CDBSidebarMenuItem icon="th-large">WAF</CDBSidebarMenuItem></Link>
          <Link className="categorybtn" to="/g-url" onClick={() => changeRouter('General URL', 14)}> <CDBSidebarMenuItem icon="check">General URL</CDBSidebarMenuItem></Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar