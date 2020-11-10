import React from 'react';
import { Card,Table } from 'react-bootstrap';
import './css/SummaryOrder.css';

const SummaryOrder = () => {
    return (
        <div className="summaryBox">
            <Card className="cardStyle" >
                <Card.Body>
                    <h4 className="summaryHeader">Order Summary</h4>
                    <Table style={{border:'none'}}>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>Shipping & Proccess</td>
                                <td>TBD</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>TBD</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$900.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="border border-g bg-white text-black" >
                    <div className="footer" style={{textAlign:'right',fontSize:'12px',paddingTop:'5px'}}>
                        <p>Need Help? Call XXX.812.6235</p>
                        <p style={{fontWeight:'bold'}}><i className="fas fa-lock"></i> SECURE CHECKOUT</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}
export default SummaryOrder
