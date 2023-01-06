import Badge from '@mui/material/Badge';
import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from 'contexts/contexts';
import { CartIcon } from 'components/cart/cartIcons/CartIcons';
import './cartWidget.sass';

const CartWidget = () => {

    const { cartSize } = React.useContext(CartContext);

    return (
        <div className='cartWidget'>
            <Link to={`/cart`}>
                {cartSize <= 0 ?
                    <CartIcon />
                    :
                    <Badge color='error' badgeContent={cartSize}>
                        <CartIcon />
                    </Badge>
                }
            </Link>
        </div>
    );
}

export default CartWidget;