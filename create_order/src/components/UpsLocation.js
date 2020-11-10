import React, { useState } from 'react';
import { Form, Button, Card,Modal} from "react-bootstrap";
import './css/UpsLocation.css';
// import icon from './images/ups.png';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../redux/actions/UpsLocationAction';

const UpsLocation = () => {
    const [show, setShow] = useState(false);
    const location = useSelector(state => state.UpsLocationReducer.location);
    const dispatch = useDispatch();

  const handleClose = () =>{
    setShow(false);
  } 

  const handleShow = e => {
    e.preventDefault();
    setShow(true)
}

const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Action.resetInputs());
}
  return (
    <Card>
        <Card.Body>
            <Form onSubmit={onSubmit}>
                {/* <img src = "" alt = "icon" className='imgBottom'/> */}
                <span className='headerStyle'>Find a Pickup Location<span><button onClick={handleShow} onAnimation={true} className='btnModal'>learn more</button></span></span>
                <p className="upsDetail">Enter a Zip Code to find a UPS Access Point near you. You may assign a different Pickup Person in the Payment section.</p>
                <Modal show={show} backdrop="static" onHide={handleClose} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>UPS Access Point Pickup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='p3Style'>
                        <h6>How does it work?</h6>
                        <p className="p">Select a UPS Access Point during checkout. Your items will be shipped to the location of your choice and you will be notified of delivery via email. You will be asked to show a valid government ID and tracking number when collecting your order.
                        
                        The opening hours of the UPS Access Point will vary; they will be displayed when you select a pickup point.</p>
                        
                        <h6>Can someone else pickup my order?</h6>
                        <p className="p">Yes. In the payment section of checkout you may specify a UPS Access Point pickup person. Ensure that the name appears exactly as it does on their government issued ID. They will also need the tracking number of your order upon pickup at the UPS Access Point.
                        </p>
                        <h6>How long will my order be available for pickup?</h6>
                        <p className="p">Your package will be available for 7 calendar days. An e-mail reminder will be sent to you if your package remains uncollected before it is returned back to us.</p>
                    </Modal.Body>
                </Modal>
                <div className='flexBox'>
                    <Form.Group className="searchAddress">
                        <Form.Control  
                        type="text" 
                        size="lg" 
                        name="location" 
                        value={location} 
                        onChange = {(e) => dispatch(Action.setLocation(e.target.value))} 
                        placeholder="City, State, or Zip" />
                    </Form.Group>
                    <Button className="searchBtn" size="lg" variant="danger" type="submit">
                        Search
                    </Button>
                </div>
            </Form>
        </Card.Body>
    </Card>
  )
}
export default UpsLocation;
