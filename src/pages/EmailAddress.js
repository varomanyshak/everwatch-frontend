import React from 'react';
import {  Card,  Button } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';

const EmailAddress = (props) => {
    return (
        <>
            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px',
                'marginTop':'10px'
            }}>
                {props.Tabledata.map((item, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
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
        </>
    )
};

export default EmailAddress;