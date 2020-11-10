import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';

import SearchByCustomer from './SearchByCustomer';
import SearchByPayment from './SearchByPayment';
import SearchByRetail from './SearchByRetail';
import SearchByRegion from './SearchByRegion';
import SearchByOmni from './SearchByOmni';

import './SearchNavbar.css';

const SearchNavbar = () => {
    return (
        <Tabs className="tabStyleChild" defaultActiveKey="byCustomer" id="uncontrolled-tab-example">
            <Tab className="tabChild"  eventKey="byCustomer"  title="Search by Customer">
            <SearchByCustomer/>
            </Tab>
            <Tab eventKey="byPayment" title="Search by Payment">
            <SearchByPayment/>
            </Tab>
            <Tab eventKey="byRetail" title="Retail Search">
            <SearchByRetail/>
            </Tab>
            <Tab eventKey="byRegion" title="Region Search">
            <SearchByRegion/>
            </Tab>
            <Tab eventKey="byOmni" title="Search by OMNI type">
            <SearchByOmni/>
            </Tab>
        </Tabs>
    )
}

export default SearchNavbar
