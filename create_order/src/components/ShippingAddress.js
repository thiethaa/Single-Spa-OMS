import React, {useState} from 'react';
import { Form, Col,Button,Modal} from "react-bootstrap";
import './css/ShippingAddress.css';
import { useDispatch, useSelector } from 'react-redux';
import inputActions from '../redux/actions/ShippingAddressAction';

const ShippingAddress = () => {
  /*useSelectors,it is equivalent of map state to props. 
  It takes in a function argument that returns the part of the state that we want.
  that we already defined on combining Reducer.js/Reducers.
  and it allows you to store the return values inside a variable 
  within the scope of you functional components instead of passing down as props*/

  const name= useSelector(state => state.inputs.name);
  const address= useSelector(state => state.inputs.address);
  const apt= useSelector(state => state.inputs.apt);
  const city=useSelector(state => state.inputs.city);
  const usState=useSelector(state => state.inputs.usState);
  const zip=useSelector(state => state.inputs.zip);
  const phone=useSelector(state => state.inputs.phone);
  const stateList = useSelector(state => state.inputs.stateList);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  /*useDispatch is a function that we import from react-redux library and assign it to a variable. 
  And with this, we are able to dispatch any action to the store by simply adding 
  an action as an argument to the new variable like the code above and that’s it.*/
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(inputActions.resetInputs());
  }

  const handleClose = () =>{
    setShow(false);
    dispatch(inputActions.resetInputs())
  } 
  const handleEdit = () => setShow(false);
   
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true)
}
  return (
    <Form onSubmit={onSubmit}>
    <div className="row">
      <div className="col-md-4">
        <h6>Shipping Address</h6>
      </div>
      <div className="col-md-4 offset-md-4">
      </div>
    </div>

    <Form.Group controlId="formGridAddress1">
      <Form.Control size="lg" name="name" value={name}
        onChange={(e) => 
          dispatch(inputActions.setInputName(e.target.value))}
        placeholder="Full Name"
      />
    </Form.Group>

    <Form.Group controlId="formGridAddress1">
      <Form.Control size="lg" name="address" value={address}
        onChange={(e) => 
          dispatch(inputActions.setInputAddress(e.target.value))}
        placeholder="Address"
      />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Control size="lg" name="apt" value={apt}
        onChange={(e) => 
          dispatch(inputActions.setInputApt(e.target.value))}
        placeholder="Apartment, Suite, or Building(Optional)"
      />
    </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Control size="lg" name="city" value={city}
          onChange={(e) => 
            dispatch(inputActions.setInputCity(e.target.value))}
          placeholder="City"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Control size="lg" as="select" defaultValue="State" name="usState" value={usState}
          onChange={(e) => 
            dispatch(inputActions.setInputUsState(e.target.value))}>
              <option>State</option>
                {stateList.map((usState) =>(
              <option key={usState}>{usState}</option>
              ))}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Control size="lg" name="zip" value={zip}
          onChange={(e) => 
            dispatch(inputActions.setInputZip(e.target.value))}
          placeholder="Zip"
        />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1">
      <Form.Control size="lg" name="phone" value={phone}
        onChange={(e) => 
          dispatch(inputActions.setInputPhone(e.target.value))}
        placeholder="Phone"
      />
    </Form.Group>

    <Form.Group id="formGridCheckbox" className="checkBox">
      <Form.Check type="checkbox" label="Use this address as my billing information"
      />
    </Form.Group>
    <div>
      <Button className="btnStyle" variant="danger" size="lg" onClick={handleShow} >
        Continue
      </Button>
        <Modal show={show} backdrop="static" onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Verify Your Address</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p3Style'>
                <p className="pTag">We were not able to verify your address.You may edit your address or continue with your original entered address.</p>
                <h6 className="modalH6">{address}</h6>
                <h6 className="modalH6">{apt}</h6>
                <h6 className="modalH6">{city}{' '}{usState}{' '}{zip}</h6>
            </Modal.Body>
            <Modal.Footer>
            <Button  variant="light" size="lg" type="submit" onClick={handleClose} >Use as entered</Button>
            <Button  variant="danger" size="lg" type="submit" onClick={handleEdit}>Edit</Button>
            </Modal.Footer>
        </Modal>
      </div>
    </Form>
  );
};
export default ShippingAddress;
