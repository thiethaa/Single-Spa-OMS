import React from 'react';
import './RtsdTrigger.css';
import {Navbar,Nav,Form,Table} from 'react-bootstrap';

const RtsdTrigger = () => {
    return (
        <div className="rtsdContainer">
            <Navbar className="RtsdNavbar" bg="light" expand="lg">
                <Navbar.Brand className="rtsdBrand">Hub Information</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link></Nav.Link>
                    </Nav>
                    <Form inline>
                    <Form.Control type="text" placeholder="Filter Hubs #" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Table className="RtsdTable">
                <thead>
                    <tr>
                    <th>Hub Code</th>
                    <th>City</th>
                    <th>State</th>
                    <th>CAC</th>
                    <th>RTSD Trigger</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </div>
    )
}

export default RtsdTrigger;