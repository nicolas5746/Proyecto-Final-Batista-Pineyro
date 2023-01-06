import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AddButton, AddToCartIcon, RemoveButton } from 'components/cart/cartIcons/CartIcons';
import './itemCount.sass';

const ItemCount = ({ addItem, removeItem, quantity }) => {

    return (
        <div className='itemCount'>
            <AddToCartIcon quantity={quantity} />
            <ButtonGroup>
                <RemoveButton onClick={removeItem} />
                <AddButton onClick={addItem} />
            </ButtonGroup>
        </div>
    );
}

export default ItemCount;