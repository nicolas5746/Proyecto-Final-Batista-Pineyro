import React from 'react';
import { CartContext } from 'contexts/contexts';

const CartProvider = ({ children }) => {

    const [cart, setCart] = React.useState([]);

    const getFromCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const isInCart = (id) => {
        return id !== undefined ? getFromCart(id) : undefined;
    }

    const handleAddToCart = (item) => {
        if (isInCart(item && item.id)) {
            return item;
        }
        setCart([...cart, item]);
    }

    const handleRemoveFromCart = (id) => {
        const newCart = [...cart];
        let index = newCart.findIndex(item => item.id === id);
        newCart.splice(index, 1);
        setCart([...newCart]);
    }

    const handleClearCart = () => {
        setCart([]);
    }

    const handleSubTotalPrice = (quantity, price) => {
        let subTotal = quantity * price;
        return subTotal;
    }

    const handleTotalPrice = () => {
        let total = 0;
        cart.map((item) => {
            return total += item.price * item.quantity;
        });
        return total;
    }

    const handleAddItem = (count, setCount, stock) => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleRemoveItem = (count, setCount) => {
        setCount(Math.max(count - 1, 0));
    }

    const values = {
        cartSize: cart.length,
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        handleSubTotalPrice,
        handleTotalPrice,
        handleAddItem,
        handleRemoveItem,
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