import React, { useState } from 'react';
import { Card, Button } from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import DetailModal from '../components/DetailModal';

const DnsName = (props) => {
    const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).DNS
    const [modalShow, setModalShow] = useState(false);
    const [detailObj, setdetailObj] = useState({
        confidence: "",
        id: "",
        module: "",
        parsed: "",
        scan: "",
        scan_id: "",
        scans: "",
        timestamp: "",
        _BaseEvent__host: "",
        _BaseEvent__words: "",
        _data: {
            domains: [],
            "tenant-id": "",
            "tenant-names": []
        },
        _dummy: "",
        _hash: "",
        _id: "",
        _internal: "",
        _module_priority: "",
        _port: "",
        _priority: "",
        _resolved_hosts: "",
        _scope_distance: "",
        _source: "",
        _source_id: "",
        _stats_recorded: "",
        _tags: "",
        _type: ""
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
                type="dns"
            />
        </>
    )
};

export default DnsName;