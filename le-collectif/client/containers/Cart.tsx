import React from 'react'
import CartContainer from '../components/CartContainer';
import PaymentContainer from '../components/PaymentContainer';

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className='cart-page'>
      < CartContainer />  
      < PaymentContainer />
    </div>
  )
}

export default Cart;