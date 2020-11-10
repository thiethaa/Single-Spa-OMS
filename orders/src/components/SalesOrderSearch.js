import React from 'react';
import {Form,Col} from 'react-bootstrap';
import './SalesOrderSearch.css'
import SearchNavbar from './SearchNavbar';

const SalesOrderSearch = () => {
    return (
        <div>
            <Form className="p-4">
                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="text" placeholder="Order #" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="text" placeholder="Shipment Tracking #" />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="text" placeholder="DAX Order #" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="text" placeholder="Work Order #" />
                    </Form.Group>
                </Form.Row>

                <fieldset>
                <br/>
                <h5><span>Search by Order</span></h5>
                <br/>
                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Brand</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="date" placeholder="Show Order From dd/mm/yyyy" />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control  className="inputBox" type="date"  placeholder="Show Order To dd/mm/yyyy" />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Order Status</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>
                </fieldset>
                <fieldset>
                <br/>
                <h5><span>Additional Search Criteria</span></h5>
                <br/>
                    <SearchNavbar/>
                </fieldset>
            </Form>
            
        </div>
    )
}

export default SalesOrderSearch
