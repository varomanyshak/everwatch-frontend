import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';
import common from '../config/common';

const DnsName = (props) => {
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Card style={{ 'marginTop': '-40px' }}>
                        <Card.Body>
                            <Card.Title>Total : {props.Tabledata.length}</Card.Title>
                            <Card.Text>
                                New : {common.newScan(props.Tabledata)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center' ><h1>DNS Name</h1></Col>
                <Col></Col>
            </Row>

            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px',
                'marginTop':'10px'
            }}>

                {props.Tabledata.map((item, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{item.timestamp}</Card.Title>
                            <Card.Text>
                                {item._data}
                            </Card.Text>
                            <Button variant="primary">More detail</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
            {
                props.Tabledata.length == 0 ? (
                    <center>
                        <h3>Token expired</h3>
                    </center>
                ) : ('')
            }
        </>
    )
};

export default DnsName;