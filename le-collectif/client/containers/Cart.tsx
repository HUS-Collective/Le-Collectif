import React from 'react'
import CartContainer from '../components/CartContainer';
import PaymentContainer from '../components/PaymentContainer';
import Nav from '../containers/Nav'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className='cart-page'>
      < Nav />
      < CartContainer />  
      < PaymentContainer />
    </div>
  )
}

export default Cart;