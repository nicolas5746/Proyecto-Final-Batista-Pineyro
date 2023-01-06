import React from 'react';
import { CartContext } from 'contexts/contexts';

const CartProvider = ({ children }) => {

    const [cart, setCart] = React.useState([]);

    const getFromCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const isInCart = (id) => {
        return id !== undefined
            ?
            getFromCart(id)
            :
            undefined;
    }

    const handleAddToCart = (item) => {
        if (isInCart(item && item.id)) {
            return item;
        }
        setCart([...cart, item]);
    }

    const handleRemoveFromCart = (id) => {
        /*
            let index =  cart.findIndex(item => item.id === id);
            cart.splice(index, 1);
            setCart([...cart]);
        */
        cart.forEach((item, index) => {
            if (item.id === id) {
                item.quantity = 1;
                cart.splice(index, 1);
            }
        });
        setCart([...cart]);
    }

    const handleClearCart = () => {
        setCart([]);
    }

    const handleSubTotalPrice = (item) => {
        let subTotal = item.quantity * item.price;
        return subTotal;
    }

    const handleTotalPrice = () => {
        let total = 0;
        cart.map((item) => {
            return total += item.price * item.quantity;
        });
        return total;
    }

    const handleIncreaseItem = (id) => {
        cart.forEach(item => {
            if (item.id === id && item.quantity < item.stock) {
                item.quantity += 1;
            }
            setCart([...cart]);
        });
    }

    const handleDecreaseItem = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                item.quantity === 0
                    ?
                    item.quantity = 0
                    :
                    item.quantity -= 1;
            }
            setCart([...cart]);
        });
        cart.forEach(item => {
            if (item.quantity === 0) {
                handleRemoveFromCart(item.id);
            }
        });
    }

    const values = {
        cartSize: cart.length,
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        handleSubTotalPrice,
        handleTotalPrice,
        handleIncreaseItem,
        handleDecreaseItem,
    }

    return (
        <CartContext.Provider
            value={values}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;