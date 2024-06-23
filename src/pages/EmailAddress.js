import React, { useState } from 'react';
import { Card, Button } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import DetailModal from '../components/DetailModal';

const EmailAddress = (props) => {
    const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).EmailAddress
    const [modalShow, setModalShow] = useState(false);
    const [detailObj, setdetailObj] = useState({
        _BaseEvent__host: "",
        scans: "",
        _resolved_hosts: "",
        parsed: "",
        _scope_distance: "",
        _dummy: "",
        _BaseEvent__words: "",
        _priority: "",
        _internal: "",
        _id: "",
        confidence: "",
        _port: "",
        id: "",
        module: "",
        _type: "",
        _stats_recorded: "",
        timestamp: "",
        _source_id: "",
        _hash: "",
        _tags: "",
        _data: "",
        _source: "",
        _module_priority: "",
        scan_id: "",
        scan: "",
        web_spider_distance: "",
        num_redirects: "",
        dns_resolve_distance: "",
        _dns_children: "",
    });
    const listDetail = (list) => {
        setdetailObj(list)
        setModalShow(true)
    }
    return (
        <>
            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px',
                'marginTop': '10px'
            }}>
                {Tabledata.map((item, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                            <Card.Title>{item.timestamp}</Card.Title>
                            <Card.Text>
                                {item._data}
                            </Card.Text>
                            <Button variant="primary" onClick={() => listDetail(item)}>More detail</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
            <DetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={detailObj}
                type="Eaddress"
            />
        </>
    )
};

export default EmailAddress;