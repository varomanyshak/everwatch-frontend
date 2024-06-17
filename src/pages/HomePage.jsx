import React, { useState, useEffect } from 'react';
import { Route, Switch, Routes, Redirect } from "react-router-dom";
// import { Routes } from "../routes";



import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Content from './Content';


const RouteSidebar = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props => (
            <>
                <Sidebar />
                <main className="content">
                    <Navbar />
                    <Component {...props} />
                </main>
            </>
        )}
        />
    );
};




export default () => {
    <Routes>
        {/* <RouteSidebar exact path={"/"} element={Content} /> */}
        <Route path='/' element={<Content />} />

    </Routes>
}