import React from 'react'
import {Tabs,Tab} from 'react-bootstrap';
import './AdminTabController.css';

import RtsdTrigger from './RtsdTrigger';
import Permissions from './Permissions';

const AdminTabController = () => {
    return (
       <div>
           <Tabs defaultActiveKey="RtsdTrigger">
               <Tab eventKey="RtsdTrigger"  title="RTSD Trigger">
                    <RtsdTrigger/>
               </Tab>
               <Tab eventKey="Permissions" title="Permissions">
                    <Permissions/>
               </Tab>
           </Tabs>
       </div>
    )
}

export default AdminTabController;