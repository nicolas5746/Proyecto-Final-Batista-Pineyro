import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const CartIcon = () => {

    return (
        <IconButton style={{ color: 'gainsboro' }}>
            <ShoppingCartIcon />
        </IconButton>
    );
}

export const AddToCartIcon = ({ quantity }) => {

    return (
        <Badge color='error' badgeContent={quantity} >
            <IconButton color='primary'>
                <AddShoppingCartIcon color='primary' />
            </IconButton>
        </Badge>
    );
}

export const AddButton = ({ onClick }) => {

    return (
        <>
            <Button
                color='primary'
                variant='contained'
                style={{ marginLeft: '1%' }}
                onClick={onClick}
            >
                {' '}
                <AddIcon fontSize='smaller' />
            </Button>
        </>
    );
}

export const RemoveButton = ({ onClick }) => {

    return (
        <>
            <Button
                color='primary'
                variant='contained'
                style={{ marginRight: '1%' }}
                onClick={onClick}
            >
                {' '}
                <RemoveIcon fontSize='smaller' />
            </Button>
        </>
    );
}