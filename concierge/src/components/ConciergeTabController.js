import React from 'react'
import './ConciergeTabController.css';
import {Tabs,Tab,Button,Form} from 'react-bootstrap';

import Assignments from './Assignments';
import Dashboard from './Dashboard';
import Delivery from './DeliveryOrderSearch'

const ConciergeTabController = () => {
    return (
        <div>
            <Tabs defaultActiveKey="Assignments">
                <Tab eventKey="Assignments"  title="Assignments">
                    <Assignments/>
                </Tab>
                <Tab eventKey="Dashboard" title="Dashboard">
                    <Dashboard/>
                </Tab>
                <Tab eventKey="Delivery" title="Delivery Order Search">
                    <Delivery/>
                </Tab>
            </Tabs>
        </div>
    )
}
export default ConciergeTabController;