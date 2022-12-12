import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AddButton, RemoveButton } from 'components/shared/buttons/Buttons';
import CartBadge from 'components/cart/cartBadge/CartBadge';
import './itemCount.sass';

const ItemCount = ({ add, remove, itemCount, buyItem, addToCart }) => {

    return (
        <div className='button'>
            <Link to={`/cart`}>
                <CartBadge count={itemCount} />
            </Link>
            <ButtonGroup>
                <RemoveButton onClick={remove} />
                <Button color='primary' variant='outlined' fontSize='smaller' onClick={buyItem}>{addToCart}</Button>
                <AddButton onClick={add} />
            </ButtonGroup>
        </div>
    );
}

export default ItemCount;