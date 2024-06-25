import React from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Org from './pages/Org.js';
import filterData from './sheet.js'
import filterObj from './config/filterObj';
import Sidebar from './components/Sidebar.js';
import Scan from './pages/Scan.js';
import Expire from './pages/Expire.js';
import Social from './pages/Social.js';
import Storage from './pages/Storage.js';
import WAF from './pages/WAF.js';
import "leaflet/dist/leaflet.css";
import "./scss/volt.scss";
import "./App.css"
import Dashboard from './pages/Dashboard.js';

function App() {
  const dispatch = useDispatch()
  const Tabledata = filterData;
  dispatch(inputData(JSON.stringify(Tabledata)))
  dispatch(dataIncrement(JSON.stringify(filterObj)))

  if (filterData.state === false) {
    return (
      <>
        <Expire />
      </>
    )
  }


  return (
    <>
      <BrowserRouter Tabledata={Tabledata}>
        <Sidebar />
        <Routes Tabledata={Tabledata}>
          <Route path="/" element={<Layout Tabledata={Tabledata} />}>
            <Route index element={<Asn />} />
            <Route path='azure' element={<Azure />} />
            <Route path='geolocation' element={<Geolocation />} />
            <Route path='coderepo' element={<CodeRepo />} />
            <Route path='dns-name' element={<DnsName />} />
            <Route path='email-address' element={<EmailAddress Tabledata={Tabledata.EmailAddress} />} />
            <Route path='g-url' element={<Gurl />} />
            <Route path='open-tcp' element={<OpenTcp />} />
            <Route path='technology' element={<Technology />} />
            <Route path='finding' element={<Finding />} />
            <Route path='org' element={<Org />} />
            <Route path='scan' element={<Scan />} />
            <Route path='social' element={<Social />} />
            <Route path='storage' element={<Storage />} />
            <Route path='WAF' element={<WAF />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
