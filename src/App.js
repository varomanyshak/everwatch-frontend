import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row, Button, Container, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { inputData } from './features/counter/counterSlice.js'
import { dataIncrement } from './features/counter/dataSlice.js';

import Layout from "./pages/Layout.js";
import Asn from "./pages/Asn.js";
import Azure from './pages/Azure.js';
import Geolocation from './pages/Geolocation.js'
import CodeRepo from './pages/CodeRepo.js';
import DnsName from './pages/DnsName.js'
import EmailAddress from './pages/EmailAddress.js';
import OpenTcp from './pages/OpenTcp.js';
import Technology from './pages/Technology.js';
import Gurl from './pages/Gurl.js';
import Finding from './pages/Finding.js';
import filterData from './sheet.js'
import filterObj from './config/filterObj';
import Sidebar from './components/Sidebar.js';

import "leaflet/dist/leaflet.css";
import "./scss/volt.scss";
import "./App.css"

function App() {
  const dispatch = useDispatch()
  const Tabledata = filterData;
  dispatch(inputData(JSON.stringify(Tabledata)))
  dispatch(dataIncrement(JSON.stringify(filterObj)))
 
  return (
    <>
      <BrowserRouter Tabledata={Tabledata}>
        <Sidebar />
        <Routes Tabledata={Tabledata}>
          <Route path="/" element={<Layout Tabledata={Tabledata} />}>
            <Route index element={<Asn />} />
            <Route path='azure' element={<Azure Tabledata={Tabledata.Azure} />} />
            <Route path='geolocation' element={<Geolocation Tabledata={Tabledata.GEOLOCATION} />} />
            <Route path='coderepo' element={<CodeRepo Tabledata={Tabledata.CodeRepo} />} />
            <Route path='dns-name' element={<DnsName Tabledata={Tabledata.DNS} />} />
            <Route path='email-address' element={<EmailAddress Tabledata={Tabledata.EmailAddress} />} />
            <Route path='g-url' element={<Gurl />} />
            <Route path='open-tcp' element={<OpenTcp />} />
            <Route path='technology' element={<Technology />} />
            <Route path='finding' element={<Finding />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
