import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Asn from "./pages/Asn.js";
import Azure from './pages/Azure.js';
import Geolocation from './pages/Geolocation.js'
import CodeRepo from './pages/CodeRepo.js';
import DnsName from './pages/DnsName.js'
import EmailAddress from './pages/EmailAddress.js';

import filterData from './sheet.js'

import "./scss/volt.scss";
// import "react-datetime/css/react-datetime.css";
import "leaflet/dist/leaflet.css";
function App() {
  const Tabledata = filterData;
  useEffect(() => {
  }, [])

  return (
    <BrowserRouter Tabledata={Tabledata}>
      <Routes Tabledata={Tabledata}>
        <Route path="/" element={<Layout Tabledata={Tabledata} />}>
          <Route index element={<Asn Tabledata={Tabledata.ASN} />} />
          <Route path='azure' element={<Azure Tabledata={Tabledata.Azure} />} />
          <Route path='geolocation' element={<Geolocation Tabledata={Tabledata.GEOLOCATION} />} />
          <Route path='coderepo' element={<CodeRepo Tabledata={Tabledata.CodeRepo} />} />
          <Route path='dns-name' element={<DnsName Tabledata={Tabledata.DNS} />} />
          <Route path='email-address' element={<EmailAddress Tabledata={Tabledata.EmailAddress} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
