import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Asn from "./pages/Asn.js";
import Layout from "./pages/Layout.js";

import filterData from './sheet.js'

import "./scss/volt.scss";
// import "react-datetime/css/react-datetime.css";

function App() {
  const Tabledata = filterData;
 
  useEffect(() => {

  }, [])


  return (
    <BrowserRouter Tabledata={Tabledata}>
      <Routes Tabledata={Tabledata}>
        <Route path="/" element={<Layout Tabledata={Tabledata} />}>
          <Route index element={<Asn Tabledata={Tabledata.ASN} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
