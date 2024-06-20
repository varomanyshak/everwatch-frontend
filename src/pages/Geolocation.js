import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { Table } from 'react-bootstrap';

const PIcon = L.icon({
    iconUrl: 'assets/img/map/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

const Azure = (props) => {
    const [locations, setlocations] = useState([]);

    useEffect(() => {
        getLocations()
    }, [])

    const getLocations = () => {
        let data = props.Tabledata;
        let tempAry = []
        for (let i = 0; i < data.length; i++) {
            let temp = data[i]._data
            let josnString = temp.replaceAll("'", '"');
            josnString = josnString.replaceAll("False", false)
            tempAry.push(josnString)
        }
        setlocations(tempAry)

        tempAry.map(item => {
            // console.log(JSON.parse(item));
        })

    }

    const cardCOl = {
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <>
            <center>
                <h1> Geolocation</h1>
            </center>
            {/* <Row>
                <Col style={cardCOl}>
                    <Card
                        bg={"dark"}
                        key={"light"}
                        text={"white"}
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{"white"} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-fex justify-content-center' style={cardCOl}>
                    <Card
                        bg={"dark"}
                        key={"light"}
                        text={"white"}
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{"white"} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col><Col className='d-fex justify-content-center' style={cardCOl}>
                    <Card
                        bg={"dark"}
                        key={"light"}
                        text={"white"}
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{"white"} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col><Col className='d-fex justify-content-center' style={cardCOl}>
                    <Card
                        bg={"dark"}
                        key={"light"}
                        text={"white"}
                        style={{ width: '18rem' }}
                        className="mb-2"

                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{"white"} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <div style={{
                        'width': '100%',
                        'height': '700px',
                        'boxShadow': '0 0 10px 5px #555',
                    }}>
                        <MapContainer center={[-23.547121, -46.637186]} zoom={5} scrollWheelZoom={true} style={{ 'height': '100%', 'width': '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {
                                locations.map((item, index) => {
                                    let position = JSON.parse(item)
                                    return (
                                        <Marker position={[position.latitude, position.longitude]} icon={PIcon} key={index}>
                                            <Popup>
                                                {`Country: ${position.country_name},  City : ${position.city_name},  IP: ${position.ip}`}
                                            </Popup>
                                        </Marker>
                                    )
                                })
                            }
                        </MapContainer>
                    </div>
                </Col>
                {/* <Col>2</Col> */}
            </Row>
            <Row>
                <Col>1


                </Col>
                <Col>2</Col>
            </Row>


        </>
    )
};

export default Azure;