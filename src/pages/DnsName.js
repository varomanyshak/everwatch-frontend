import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css";
// import { Button, Col, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableColumnType,
    TableHeader
} from "react-bs-datatable";
import { Container } from 'react-bootstrap';



const DnsName = (props) => {

    return (
        <>
            <center>
                <h1> Dns Name </h1>
            </center>
            <Container style={{
                'display':'flex',
                'flexWrap':'wrap',
                'gap':'3px'
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
        </>
    )
};

export default DnsName;