import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, ButtonGroup } from '@themesberg/react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const domainspan = {
    'display': 'inline-block',
    'padding': '2px 10px',
    'margin': '3px',
    'background': '#8ac5ffa6',
    "borderRadius": '10px',
    "wordBreak": 'break-all'
}
const tenantName = {
    'display': 'inline-block',
    'padding': '2px 10px',
    'margin': '3px',
    'background': '#cfd3d7a6',
    "borderRadius": '10px',
    "wordBreak": 'break-all'
}

export default (props) => {
    if (props.data._type == "OPEN_TCP_PORT") {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ 'wordBreak': 'break-all' }} className='p-2'>
                        {props.data.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='p-2'>
                        <Col>
                            <Row>
                                <Col><h6>Host</h6></Col>
                                <Col>{props.data._BaseEvent__host}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Port</h6></Col>
                                <Col>{props.data._port}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Confidence</h6></Col>
                                <Col>{props.data.confidence}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Module</h6></Col>
                                <Col>{props.data.Module}</Col>
                            </Row>
                            <Row>
                                <Col><h6 >Scan_id</h6></Col>
                                <Col style={{ 'wordBreak': 'break-all' }}>{props.data.scan_id}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Timestamp</h6></Col>
                                <Col>{props.data.timestamp}</Col>
                            </Row>
                            <Row>
                                <Col><h6>BaseEvent_words</h6></Col>
                                <Col>{props.data._BaseEvent__words}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Dummy</h6></Col>
                                <Col>{props.data._dummy}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Hash</h6></Col>
                                <Col>{props.data._hash}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Internal</h6></Col>
                                <Col>{props.data._internal}</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col><h6>Module_priority</h6></Col>
                                <Col>{props.data._module_priority}</Col>
                            </Row>

                            <Row>
                                <Col><h6>Priority</h6></Col>
                                <Col>{props.data._priority}</Col>
                            </Row>
                            <Row>
                                <Col><h6>ResolvedHosts</h6></Col>
                                <Col>{props.data._resolved_hosts[0]},<br />{props.data._resolved_hosts[1]}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Tags</h6></Col>
                                <Col>{props.data._source.tags}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Stats_recorded</h6></Col>
                                <Col>{props.data._stats_recorded}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Tags</h6></Col>
                                <Col>{props.data._tags}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        )
    }
    if (props.data._type == "ORG_STUB") {
        console.log(props.data);
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ 'wordBreak': 'break-all' }} className='p-2'>
                        {props.data.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='p-2'>
                        <Col>
                            <Row>
                                <Col><h6>Data</h6></Col>
                                <Col>{props.data._data}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Port</h6></Col>
                                <Col>{props.data._port}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Confidence</h6></Col>
                                <Col>{props.data.confidence}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Module</h6></Col>
                                <Col>{props.data.module}</Col>
                            </Row>
                            <Row>
                                <Col><h6 >Scan_id</h6></Col>
                                <Col style={{ 'wordBreak': 'break-all' }}>{props.data.scan_id}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Timestamp</h6></Col>
                                <Col>{props.data.timestamp}</Col>
                            </Row>
                            <Row>
                                <Col><h6>BaseEvent_words</h6></Col>
                                <Col>{props.data._BaseEvent__words}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Dummy</h6></Col>
                                <Col>{props.data._dummy}</Col>
                            </Row>

                        </Col>
                        <Col>
                            <Row>
                                <Col><h6>Hash</h6></Col>
                                <Col>{props.data._hash}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Internal</h6></Col>
                                <Col>{props.data._internal}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Module_priority</h6></Col>
                                <Col>{props.data._module_priority}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Priority</h6></Col>
                                <Col>{props.data._priority}</Col>
                            </Row>
                            <Row>
                                <Col><h6>ResolvedHosts</h6></Col>
                                <Col>{props.data._resolved_hosts}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Stats_recorded</h6></Col>
                                <Col>{props.data._stats_recorded}</Col>
                            </Row>
                            <Row>
                                <Col><h6>Tags</h6></Col>
                                <Col>{props.data._tags}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        )
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ 'wordBreak': 'break-all' }} className='p-2'>
                    {props.data.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.type == "asn" ? (
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <Row>
                                    <Col>
                                        ASN  :
                                    </Col>
                                    <Col>
                                        {props.data._data.asn}
                                    </Col>
                                    <Col>
                                        Country  :
                                    </Col>
                                    <Col>
                                        {props.data._data.country}
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>Description:{props.data._data.description}</Col>
                                    <Col>Name:{props.data._data.name}</Col>
                                    <Col>Subnet:{props.data._data.subnet}</Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (<>
                    {props.type == "azure" ? (
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Tenant_Id:{props.data._data["tenant-id"]}
                                </Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            Domains: {props.data._data.domains.map(item => (
                                                <div style={domainspan}>{item}</div>
                                            ))}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Tenant-names: {props.data._data["tenant-names"].map(item => (
                                                <div style={tenantName}>{item}</div>
                                            ))}
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ) : ('')

                    }

                </>)}
                <br />
                <Row className='p-2'>
                    <Col>
                        <Row>
                            <Col><h6>Confidence</h6></Col>
                            <Col>{props.data.confidence}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Module</h6></Col>
                            <Col>{props.data.module}</Col>
                        </Row>
                        <Row>
                            <Col><h6 >Scan_id</h6></Col>
                            <Col style={{ 'wordBreak': 'break-all' }}>{props.data.scan_id}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Timestamp</h6></Col>
                            <Col>{props.data.timestamp}</Col>
                        </Row>
                        <Row>
                            <Col><h6>BaseEvent_words</h6></Col>
                            <Col>{props.data._BaseEvent__words}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Dummy</h6></Col>
                            <Col>{props.data._dummy}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Hash</h6></Col>
                            <Col>{props.data._hash}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Internal</h6></Col>
                            <Col>{props.data._internal}</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col><h6>Module_priority</h6></Col>
                            <Col>{props.data._module_priority}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Port</h6></Col>
                            <Col>{props.data._port}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Priority</h6></Col>
                            <Col>{props.data._priority}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Scope_distance</h6></Col>
                            <Col>{props.data._scope_distance}</Col>
                        </Row>
                        <Row>
                            <Col><h6>IP address</h6></Col>
                            <Col>{props.data._source.ip_address}</Col>
                        </Row>
                        <Row>
                            <Col><h6>module</h6></Col>
                            <Col>{props.data._source.module}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Tags</h6></Col>
                            <Col>{props.data._source.tags}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Stats_recorded</h6></Col>
                            <Col>{props.data._stats_recorded}</Col>
                        </Row>
                        <Row>
                            <Col><h6>Tags</h6></Col>
                            <Col>{props.data._tags}</Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}