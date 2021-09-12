import React from 'react';
import {Col, Row} from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import {Button} from 'react-bootstrap'

function Call() {
    return (
        <div className='p-3'>
            <h1 className='h3 py-2'>
                Звонки
            </h1>
            <div className='info'>
                <h4>
                    <Button variant='warning'>Всего
                        <Badge bg='warning'>9</Badge>
                    </Button>
                </h4>
            </div>
            <Row className='m-0'>
                <Col className='col-12 col-md-4 col-lg-3 p-0 pr-md-1'>

                </Col>
            </Row>
        </div>
    );
}
export default Call;