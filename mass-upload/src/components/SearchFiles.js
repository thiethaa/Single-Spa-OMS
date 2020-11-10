import React from 'react';
import {Form,Row,Col,Container,Button,Navbar,Nav} from 'react-bootstrap';
import './SearchFiles.css';

const SearchFiles = () => {
    return(
        <Container className="SearchFilesContainer">
            <Row>
                <Col md="auto">
                    <Form className="p-4">
                        <Form.Group >
                        <Form.Control className="inputSFBox" as="select" defaultValue="Choose...">
                            <option>File Type</option>
                            <option>All STS</option>
                        </Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="inputSFBox" type="text" placeholder="User ID" />
                        </Form.Group>

                        <Form.Group >
                        <Form.Control className="inputSFBox" as="select" defaultValue="Choose...">
                            <option>Upload Status</option>
                            <option>All</option>
                        </Form.Control>
                        </Form.Group>
                        
                        <Form.Group >
                        <Form.Control className="inputSFBox" as="select" defaultValue="Choose...">
                            <option>Date Option</option>
                            <option>After or Equal To</option>
                        </Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className="inputSFBox" type="date" placeholder="From Date" />
                        </Form.Group>

                        <Form.Group >
                        <Form.Control className="inputSFBox" as="select" defaultValue="Choose...">
                            <option>Barand</option>
                            <option>All</option>
                        </Form.Control>
                        </Form.Group>
                    
                        <Form.Group style={{textAlign:'center'}}>
                        <Button style={{width:'100%'}} variant="success" type="submit">
                            Submit
                        </Button>
                        </Form.Group>
                        
                        <Form.Group style={{textAlign:'center'}}>
                        <Button style={{width:'100%'}} variant="light" type="submit">
                            Reset Field
                        </Button>
                        </Form.Group>
                    </Form>
                </Col>

                <Col>
                    <Navbar expand="lg">
                        <Navbar.Brand>Mass Upload Search Result</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link></Nav.Link>
                            
                            </Nav>
                            <Form inline>
                            <Button variant="light">Get Template</Button>
                            <Button variant="success">New Upload</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <div className="refreshBtnBox">
                        <Button className="refreshBtn" type="submit" variant="light">Refresh</Button>
                    </div>

                    <fieldset>
                        <Form.Row>
                            <Form.Group as={Col}>
                            <Form.Control className="inputS2FBox" as="select" defaultValue="Choose...">
                                <option>Barand</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Control className="inputSF2Box" as="select" defaultValue="Choose...">
                                <option>File Type</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>
                            
                            <Form.Group as={Col}>
                            <Form.Control className="inputSF2Box" as="select" defaultValue="Choose...">
                                <option>Uploaded File</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>
                            
                            <Form.Group as={Col}>
                            <Form.Control className="inputSF2Box" as="select" defaultValue="Choose...">
                                <option>Uploaded Date</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Control className="inputSF2Box" as="select" defaultValue="Choose...">
                                <option>User ID</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Control className="inputSF2Box" as="select" defaultValue="Choose...">
                                <option>Status</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Control className="inputSF2Box" as="select" defaultValue="Choose...">
                                <option>Error File</option>
                                <option>All</option>
                            </Form.Control>
                            </Form.Group>

                        </Form.Row>
                    </fieldset>
                </Col>
            </Row>
        </Container>
    )
}
export default SearchFiles;