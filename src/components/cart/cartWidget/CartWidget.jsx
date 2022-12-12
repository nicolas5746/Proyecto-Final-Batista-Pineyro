import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from 'contexts/contexts';
import './cartWidget.sass';

const CartWidget = () => {
    
    const { cartSize } = React.useContext(CartContext);

    let cartStyle = { color: 'gainsboro' }

    return (
        <div className='cartWidget'>
            <Link to={`/cart`}>
                {cartSize <= 0 ?
                    <IconButton style={cartStyle} aria-label='add to cart'>
                        <ShoppingCartIcon style={cartStyle} />
                    </IconButton>
                    :
                    <Badge color='error' badgeContent={cartSize}>
                        <IconButton style={cartStyle} aria-label='add to cart'>
                            <ShoppingCartIcon style={cartStyle} />
                        </IconButton>
                    </Badge>
                }
            </Link>
        </div>
    );
}

export default CartWidget;