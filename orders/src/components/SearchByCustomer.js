import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';

const SearchByCustomer = () => {
    return (
        <fieldset style={{paddingTop:'20px'}}>
        <Form.Row>
            <Form.Group style={{display:'flex',justifyContent:'space-between',marginLeft:'-10px'}}>
                <Form.Group as={Col}>
                <Form.Control className="inputBox" style={{minWidth:'120px'}} type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Control className="inputBox" style={{minWwidth:'120px'}}  type="text" placeholder="Last Name" />
                </Form.Group>
            </Form.Group>
            
            <Form.Group as={Col}>
            <Form.Control className="inputBox" type="text" placeholder="Postal Code" />
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Control className="inputBox" type="text" placeholder="Phone #" />
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Control className="inputBox" type="text" placeholder="Email Address" />
            </Form.Group>
        </Form.Row>
        <Form.Group style={{display:'flex',justifyContent:'space-between',minWidth:'200px',justifyContent:'center'}}>
            <Button style={{minWidth:'90px'}} variant="success" type="submit">
                Search
            </Button>
                <Form.Check style={{paddingTop:'5px', marginLeft:'5px'}} type="checkbox" label="Search archived orders" />
        </Form.Group>
    </fieldset>
    )
}

export default SearchByCustomer
