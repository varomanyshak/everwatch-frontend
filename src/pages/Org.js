import React, { useState} from 'react';
import {Card,  Button,} from '@themesberg/react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector,  } from 'react-redux'
import DetailModal from '../components/DetailModal';

const Org = (props) => {
    const OrgTabledata = JSON.parse(useSelector((state) => state.counter.value)).Org
    const [modalShow, setModalShow] = useState(false);
    const [detailObj, setdetailObj] = useState({
        _BaseEvent__host:"",
        scans:"",
        _resolved_hosts:"",
        parsed:"",
        _scope_distance:"",
        _dummy:"",
        _BaseEvent__words:"",
        _priority:"",
        _internal:"",
        _id:"",
        confidence:"",
        _port:"",
        id:"",
        module:"",
        _type:"",
        _stats_recorded:"",
        timestamp:"",
        _source_id:"",
        _hash:"",
        _tags:"",
        _data:"",
        _source:"",
        _module_priority:"",
        scan_id:"",
        scan:""
    });

    const listDetail = (list) => {
        setdetailObj(list)
        setModalShow(true)
        console.log(list);
    }
     return (
        <>
            <Container style={{
                'display': 'flex',
                'flexWrap': 'wrap',
                'gap': '3px',
                'marginTop': '10px'
            }}>

                {OrgTabledata.map((item, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                            <Card.Title>{item._data}</Card.Title>
                            <Card.Text>
                                {item._id}
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
                type="ORG"
            />
        </>
    )
};

export default Org;