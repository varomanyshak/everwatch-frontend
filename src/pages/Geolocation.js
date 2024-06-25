import React from 'react';
import { Col, Row } from '@themesberg/react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { useSelector } from 'react-redux'  

const PIcon = L.icon({
    iconUrl: 'assets/img/map/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

const Azure = (props) => {
    const GeoTabledata = JSON.parse(useSelector((state) => state.counter.value)).GEOLOCATION
    console.log(GeoTabledata);
    return (
        <>
            <Row>
                <Col>
                    <div style={{
                        'width': '100%',
                        'height': '800px',
                        'boxShadow': '0 0 10px 5px #555',
                    }}>
                        <MapContainer center={[-23.547121, -46.637186]} zoom={5} scrollWheelZoom={true} style={{ 'height': '100%', 'width': '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {
                                GeoTabledata.map((item, index) => {
                                    return (
                                        <Marker position={[item._data.latitude, item._data.longitude]} icon={PIcon} key={index}>
                                            <Popup>
                                                {`Country: ${item._data.country_name},  City : ${item._data.city_name},  IP: ${item._data.ip}`}
                                            </Popup>
                                        </Marker>
                                    )
                                })
                            }
                        </MapContainer>
                    </div>
                </Col>
            </Row>
        </>
    )
};

export default Azure;