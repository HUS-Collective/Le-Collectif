import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

type Props = {}

const PaymentContainer = (props: Props) => {
  return (
    <div className='payment-container'>
        <h1>Total</h1>
      <div id='payment-cart-details'>
        <div id='category'>
          <h4>Sub-total</h4>
          <h4>Delivery</h4>
        </div>
        <div id='totals'>
          <h4>$4.99</h4>
          <h4>Free</h4>
        </div>
      </div>
      <MDBBtn outline color='secondary'>checkout</MDBBtn>
    </div>
  )
}
export default PaymentContainer;