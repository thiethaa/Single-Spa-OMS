import React from 'react'
import {Form,Col,Button} from 'react-bootstrap';
import './DeliveryOrderSearch.css'

const DeliveryOrderSearch = () => {
    return (
        <Form className="p-4">
            <fieldset>
                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Work Order Status</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Work Order Type</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Final Mile Hub</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Brand</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Agent</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <fieldset>
                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="Date" placeholder="Show Orders From Appointment Date" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" type="Date" placeholder="Show Orders To Appointment Date" />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Concierge Vs Related Orders</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                    <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                        <option>Channel</option>
                        <option>All</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    </Form.Group>

                </Form.Row>
            </fieldset>
            <fieldset>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Check type="checkbox" label="Delivery Exceptions" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Check type="checkbox" label="Store Order" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control className="inputBox" type="text" placeholder="Store #" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    </Form.Group>

                    <Form.Group as={Col}>
                    </Form.Group>
                </Form.Row>
            </fieldset>

            <legend><h6 style={{textAlign:'center',paddingTop:'10px', paddingBottom:'10px'}}>Search by Customer</h6></legend>
            <fieldset>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control className="inputBox" type="text" placeholder="Phone #" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control className="inputBox" type="email" placeholder="Email Address " />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control className="inputBox" type="text" placeholder="Order #" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control className="inputBox" type="text" placeholder="Work #" />
                    </Form.Group>
                    <Form.Group as={Col}>
                    </Form.Group>
                </Form.Row>
                <Form.Group style={{display:'flex',justifyContent:'space-between',minWidth:'200px',justifyContent:'center'}}>
                <Button style={{minWidth:'90px'}} variant="success" type="submit">
                    Search
                </Button>
            </Form.Group>
            </fieldset>
        </Form>
    )
}
export default DeliveryOrderSearch;