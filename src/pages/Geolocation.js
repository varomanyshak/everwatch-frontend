import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//     Marker, Popup
// } from 'https://cdn.esm.sh/react-leaflet'

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap, Marker, Popup } from 'react-leaflet/hooks'

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'




const Azure = (props) => {
    useEffect(() => {
        console.log(props.Tabledata);
    }, [])


    return (

        <>
            <center>
                <h1> Geolocation</h1>
            </center>

            <div style={{
                'width': '100%',
                'height': '600px',
                'boxShadow': '0 0 15px 5px #333',
            }}>

                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ 'height': '100%', 'width': '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.    
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>


        </>
    )
};

export default Azure;