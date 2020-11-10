import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import './RewardTabController.css';

import CertificateSearch from './CertificateSearch';
import LoyaltyAccountSearch from './LoyaltyAccountSearch';
import CertificateHistorySearch from './CertificateHistorySearch';

const TabController = () => {
    return (
        <div>
        <Tabs className="tabStyle" defaultActiveKey="certificateSearch" id="uncontrolled-tab-example">
                <Tab  eventKey="certificateSearch"  title="Certificate Search">
                <CertificateSearch/>
                </Tab>
                <Tab className="tabStyle" eventKey="loyaltyAccountSearch" title="Loyalty Account Search">
                <LoyaltyAccountSearch/>
                </Tab>
                <Tab className="tabStyle" eventKey="certificateHistorySearch" title="Certificate Histoy Search">
                <CertificateHistorySearch/>
                </Tab>
            </Tabs>
        </div>
    )
}
export default TabController;