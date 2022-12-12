import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartBadge = ({ count }) => {
    return (
        <>
            <Badge color='error' badgeContent={count} >
                <IconButton color='primary' aria-label='add to cart'>
                    <AddShoppingCartIcon color='primary' />
                </IconButton>
            </Badge>
        </>
    );
}

export default CartBadge;