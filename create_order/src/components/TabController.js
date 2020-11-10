import React from 'react';
import { Form } from 'react-bootstrap';
import './css/TabController.css';
// import icon from './images/ups.png';

const TabController = (props) => {
return (
      <Form>
        <div className="form-row justify-content-between">
          <div className="p-2 form-group col-md-6 border border-grey"><span className='titleStyle'>Ship to Address</span>
          <Form.Check className='fontStyle'
            type="radio"
            label="Have your items shipped to your selected address"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            checked={props.data} 
            onChange={props.updateState}
            />
          </div>
          <div className="p-2 form-group col-md-6 border border-grey">
          {/* <img src = ""alt = "icon" className='img'/> */}
          <span className='titleStyle2'>Ship to Location near you</span>
          <Form.Check className='fontStyle'
            type="radio"
            label="Have your items shipped to UPS access point"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            checked={!props.data} 
            onChange={props.updateState}
            />
          </div>
        </div>
      </Form>
    )
}
export default TabController
