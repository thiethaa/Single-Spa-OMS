import React,{ useState }  from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import "./root.component.css";

import ShippingAddress from './components/ShippingAddress';
import Header from './components/Header';
import SummaryOrder from './components/SummaryOrder';
import TabController from './components/TabController';
import Ups from './components/UpsLocation';

import { Provider } from 'react-redux';
import store from './redux/createStore';


function App() {
  const [isShipping, setIsShipping] = useState(true);

  const stateHandler=()=> {
    setIsShipping(!isShipping);
  }
  if(isShipping){
    return (
    /*Provider will serve as the component bridge between the Redux store and our entire app, 
    so we are going to wrap the App component with this component provided to us from the react-redux library.
    This component will have a property called store */
    <Provider store={store}>
    <div className="boxContainer">
      <Header/>
        <Container> 
          <Row>
            <Col sm={1}></Col>
            <Col className="shippingCol" sm={6}>
              <h4 className="titleShip"> 1. Shipping </h4>
              <div className="containerStyle">
                <TabController  data={isShipping} updateState={stateHandler}></TabController>
                <ShippingAddress/>
              </div>
              <h4 className="titleShip2">2. Delivery & Gift Options</h4>
              <h4 className="titleShip2">3. Payment</h4>
              <p className="feedBack">[+] Give us feedback about this page</p>
            </Col>
            <Col sm={4} className="summaryCol"><SummaryOrder/></Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      </div>
      </Provider>  
    )
  }
  else{
      return(
        <Provider store={store}> 
        <div className="boxContainer">
          <Header/>
            <Container> 
            <Row>
              <Col sm={1}></Col>
              <Col sm={6} className="mainCol">
              <h4 className="titleShip"> 1. Shipping</h4>
                <div className="containerStyle">
                  <TabController  data={isShipping} updateState={stateHandler}></TabController>
                  <Ups/>
                </div>
                <h4 className="titleShip2">2. Delivery & Gift Options</h4>
                <h4 className="titleShip2">3. Payment</h4>
                <p className="feedBack">[+] Give us feedback about this page</p>
              </Col>
              <Col sm={4} className="summaryCol"><SummaryOrder/></Col>
              <Col sm={1}></Col>
            </Row>
          </Container>
        </div>
      </Provider>  
    )
  }
}
export default App;

