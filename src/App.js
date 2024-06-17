import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Home1 from "./pages/Home1.js";
import Home2 from "./pages/Home2.js";

import "./scss/volt.scss";
import "react-datetime/css/react-datetime.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home1' element={<Home1 />} />
          <Route path='/home2' element={<Home2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
