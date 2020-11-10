import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sales from './SalesOrderSearch';
import Return from './ReturnSearch';
import Allocation from './FutureAllocation';
import Transfer from './TransferSearch';
import {BrowserRouter,NavLink,Link} from 'react-router-dom';
import './TabController.css';

const TabController = () => {
    return (
    <BrowserRouter>
        <div className="containerBox">
        <Link className="orderBtn" to="/home/create-order">Create Order</Link>
        <Tabs className="tabStyle" defaultActiveKey="salesOrder" id="uncontrolled-tab-example">
                <Tab  eventKey="salesOrder"  title="Sales Order search">
                <Sales/>
                </Tab>
                <Tab className="tabStyle" eventKey="returnSearch" title="Return search">
                <Return/>
                </Tab>
                <Tab className="tabStyle" eventKey="transferSearch" title="Transfer Search">
                <Transfer/>
                </Tab>
                <Tab className="tabStyle" eventKey="futureAllocation" title="Future Allocations Search">
                <Allocation/>
                </Tab>
            </Tabs>
        </div>
    </BrowserRouter>
    )
}
export default TabController
