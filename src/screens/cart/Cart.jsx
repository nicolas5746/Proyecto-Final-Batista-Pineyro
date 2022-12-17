import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from 'contexts/contexts';
import { BlueButton } from 'components/shared/buttons/Buttons';
import CartTable from 'components/cart/cartTable/CartTable';
import './cart.sass';

const Cart = () => {

    const { cartSize } = React.useContext(CartContext);

    let btnStyle = { width: '15%' }

    if (cartSize === 0) {
        return (
            <div className='cart'>
                <div className='noItem'>
                    {`Tu carrito está vacío!`}
                </div>
                <Link to='/'>
                    <BlueButton text={`Continuar comprando`} style={btnStyle} />
                </Link>
            </div>
        );
    }

    return (
        <div className='cart'>
            <CartTable currency={`USD`} />
        </div>
    );
}

export default Cart;