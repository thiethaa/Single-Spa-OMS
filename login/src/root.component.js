import React, {useState} from "react";
import './root.component.css';
import {Navbar,Nav,Button,Form,Card} from 'react-bootstrap';
import {BrowserRouter,Link} from "react-router-dom";

export default function Root() {
const initialState ={
  email:'',
  pwd:''
}
const [email, setEmail]=useState(initialState.email);
const [pwd, setPwd]=useState(initialState.pwd);

const clearState =()=>{
  setEmail('');
  setPwd('');
}

const onChange =(e) => {
  const{name,value} = e.target;
  switch(name){
    case "email":
      setEmail(value);
      break;
    case "pwd":
      setPwd(value);
      break;
    default:
        break;
  }
}
const onSubmit = (e) => {
  e.preventDefault();
  clearState();
}

  return (
    <BrowserRouter>
    <div className="boxLogin">
        <Navbar bg="success" style={{height:'40px'}}>
            <Navbar.Brand><h6 className="brand">WSI</h6></Navbar.Brand>
            <Navbar.Text><h6 className="title">Order Management System</h6></Navbar.Text>
        </Navbar>
        <Card className="CardLogin">
            <Card.Header className="bg-success text-white">CCUI LOGIN</Card.Header>
            <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control name="pwd" type="password" placeholder="Password" />
                  </Form.Group>
                
                  <Link to="/home"><Button className="loginBtn" variant="success" type="submit">Log In</Button></Link>
              </Form>
            </Card.Body>
        </Card>
    </div>
    </BrowserRouter>
  )
}
