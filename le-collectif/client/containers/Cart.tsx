import React from "react";
import Nav from "./Nav";
import CartContainer from '../components/CartContainer';
import PaymentContainer from '../components/PaymentContainer';

type Props = {}

const Cart = (props: Props) => {
    return (
        <div className='cart-page'>
            <div>
                <Nav />
            </div>
            < CartContainer />
            < PaymentContainer />
        </div>
    )
}

export default Cart;