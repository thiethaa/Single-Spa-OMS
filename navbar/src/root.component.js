import React from "react";
import {BrowserRouter,Link} from "react-router-dom";
import{Navbar,Nav,Form,FormControl,NavDropdown} from 'react-bootstrap';
import './root.component.css';


export default function Root() {
  return ( 
    <BrowserRouter>
        <div className="navbarBox">
          <Navbar bg="success" style={{height:'40px'}}>
            <Navbar.Brand><h6 className="brand">WSI</h6></Navbar.Brand>
            <Navbar.Text><h6 className="title">Order Management System</h6></Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Form inline>
              <Link  className="app2" to="/home/angular">
                    AngularApp
                </Link> 
                <a className ="app1" href="http://localhost:4200/">
                  AngularLink 
                </a>
                <Link  className="app2" to="/login">
                    Login
                </Link> 
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to = "/home/store" className ="link1st">Store</Link>
                <Link to = "/home/orders" className = "link">Orders</Link>
                <Link to = "/home/items" className = "link">Items</Link>
                <Link to = "/home/rewards" className = "link">Rewards</Link>
                <Link to = "/home/admin" className = "link">Admin</Link>
                <Link to = "/home/concierge" className = "link">Concierge</Link>
                <Link to = "/home/omni" className = "link">OMNI Ops</Link>
                <Link to = "/home/shipment" className = "link">Shipment</Link>
                <Link to = "/home/mass-upload" className = "link">Mass Upload</Link>
            </Nav>
            <Nav>
            <NavDropdown title="Order #" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <FormControl type="text" placeholder="Ex.1234567890" className="mr-sm-2" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    </BrowserRouter>
  );
}