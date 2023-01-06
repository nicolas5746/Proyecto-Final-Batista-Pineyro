import React from 'react';
import { Link } from 'react-router-dom';
import { AddToCartIcon } from 'components/cart/cartIcons/CartIcons';
import { BlueButton } from 'components/shared/buttons/Buttons';
import { CartContext } from 'contexts/contexts';
import CartTable from 'components/cart/cartTable/CartTable';
import './cart.sass';

const Cart = () => {

    const { cartSize } = React.useContext(CartContext);

    return (
        <div className='cart'>
            {cartSize === 0 ?
                <>
                    <div className='noItem'>
                        <AddToCartIcon quantity={`0`} />
                        {`Tu carrito está vacío!`}
                    </div>
                    <Link to='/'>
                        <BlueButton
                            text={`Continuar comprando`}
                            style={{ width: '15%' }}
                        />
                    </Link>
                </>
                :
                <CartTable currency={`USD`} />
            }
        </div>
    );
}

export default Cart;