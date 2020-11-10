import React from 'react';
import {Form,Col, Button} from 'react-bootstrap';
import './CertificateSearch.css'

const CertificateSearch = () => {
    return (
        <div className="rewardBox">
            <Form className="p-4">
                <Form.Row className="rowBox">
                <Form.Group as={Col}>
                <Form.Control className="inputBox" type="text" placeholder="Certificate #" />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Control className="inputBox" type="text" placeholder="PLCC #" />
                </Form.Group>
                
                <Form.Group as={Col}>
                <Form.Control className="inputBox" type="text" placeholder="Loyalty Account Phone #" />
                </Form.Group>
                </Form.Row>
                
                <div style={{display:'flex'}}>
                    <Button type="submit" variant="success">Search</Button>
                    <Button type="reset" variant="light">Reset</Button>
                </div>
            </Form>
        </div>
        )
    }
export default CertificateSearch;