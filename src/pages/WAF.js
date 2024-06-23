import React from 'react';
import { useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion';

const WAF = (props) => {
    const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).WAF

    return (
        <>
            <Accordion defaultActiveKey="0">
                {Tabledata.map((item, index) => (
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{item._data.host}</Accordion.Header>
                        <Accordion.Body style={{background:'#e3e4e5'}}>
                            <p>_id : {item._id}</p>
                            <p>_BaseEvent__host : {item._BaseEvent__host}</p>
                            <p>scans : {item.scans}</p>
                            <p>parsed : {item.parsed}</p>
                            <p>URL : {item._data.url}</p>
                            <p>WAF : {item._data.WAF}</p>
                            <p>Source : {item._source}</p>
                            <p>Scan_ID : {item.scan_id}</p>
                            <p>Hash : {item._hash}</p>
                            <p>Module : {item.module}</p>
                            <p>timestamp : {item.timestamp}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
                }
            </Accordion>
        </>
    )
};

export default WAF;