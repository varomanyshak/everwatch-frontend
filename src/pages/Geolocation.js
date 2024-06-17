import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";



const Azure = (props) => {
    useEffect(() => {
        console.log(props.Tabledata);
    }, [])


    return (

        <>
            <center>
                <h1> Geolocation</h1>
            </center>

        </>
    )
};

export default Azure;