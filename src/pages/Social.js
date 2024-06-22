import React, { useState } from 'react';
import { Col, Row, Button, Table } from '@themesberg/react-bootstrap';
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";
import { useSelector } from 'react-redux'
import DetailModal from '../components/DetailModal';

const Social = () => {
    const Tabledata = JSON.parse(useSelector((state) => state.counter.value)).Social
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
        _data: {
            platform: "",
            url: "",
            profile_name: ""
        },
        _source: "",
        _module_priority: "",
        scan_id: "",
        scan: ""
    });

    const listDetail = (list) => {
        setdetailObj(list)
        setModalShow(true)
    }

    const STORY_HEADERS = [
        {
            prop: "_data.profile_name",
            title: "profile",
            isSortable: true
        },
        {
            prop: "_data.platform",
            title: "platform",
            isSortable: true
        },
        {
            prop: "_data.url",
            title: "url",
            isSortable: true
        },
        {
            prop: "module",
            title: "Module",
            isSortable: true
        },
        {
            prop: "timestamp",
            title: "Time",
            isSortable: true
        },
        {
            prop: "button",
            cell: (row) => (
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => { listDetail(row) }}
                >
                    Detail
                </Button>
            )
        }
    ];

    return (
        <>
            <DatatableWrapper
                body={Tabledata}
                headers={STORY_HEADERS}
                paginationOptionsProps={{
                    initialState: {
                        rowsPerPage: 10,
                        options: [5, 10, 15, 20]
                    }
                }}
            >
                <Row className="mb-4 p-2">
                    <Col
                        xs={12}
                        lg={4}
                        className="d-flex flex-col justify-content-end align-items-end"
                    >
                        <Filter />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                    >
                        <PaginationOptions />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="d-flex flex-col justify-content-end align-items-end"
                    >
                        <Pagination />
                    </Col>
                </Row>
                <Table>
                    <TableHeader />
                    <TableBody />
                </Table>
            </DatatableWrapper>
            <DetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={detailObj}
                type='Social'
            />
        </>
    )
};

export default Social;