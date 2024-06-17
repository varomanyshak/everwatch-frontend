import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup, Poupe, Marker } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';

const EmailAddress = (props) => {
    useEffect(() => {
        console.log(props.Tabledata);
    }, [])

    return (
        <>
            <center>
                <h1> Email Address</h1>
            </center>
            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px'
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

export default EmailAddress;