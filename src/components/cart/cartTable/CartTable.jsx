import React from 'react';
import { CartContext } from 'contexts/contexts';
import { AddButton, RemoveButton, BlueButton, WhiteButton } from 'components/shared/buttons/Buttons';
import CartBadge from 'components/cart/cartBadge/CartBadge';
import './cartTable.sass';

const CartTable = ({ currency }) => {

    const {
        cart,
        handleRemoveFromCart,
        handleClearCart,
        handleSubTotalPrice,
        handleTotalPrice
    }
        = React.useContext(CartContext);

    let buttonStyle = { width: '15%' }

    return (
        <div className='container'>
            <h1 className='yourCart'>{`tu carrito`}</h1>
            {cart.map((product) => (
                <>
                    <div className='card'>
                        <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden
                                        rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'
                        >
                            <img
                                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                                src={product.image}
                                alt={product.name}
                                title={product.name}
                            />
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <CartBadge count={product.quantity} />
                            <div className='addedItem'>
                                <RemoveButton />
                                <AddButton />
                            </div>
                            <h2 className='brand'>{product.brand}</h2>
                            <p className='name'>{product.name}</p>
                            <p className='category'>{product.category}</p>
                            <p className='colour'>{`Color:`} {product.colour}</p>
                            <p className='greyHeader'>{`Precio unitario:`} {currency} {product.price}</p>
                        </div>
                        <div className='subTotalPrice'>
                            {`Sub-total:`} {currency} {handleSubTotalPrice(product.quantity, product.price)}
                        </div>
                        <BlueButton text={`Quitar de la lista`} onClick={() => handleRemoveFromCart(product.id)} />
                    </div>
                </>
            ))}
            <div className='totalPrice'>
                {`Precio Total:`} {currency} {handleTotalPrice()}
            </div>
            <WhiteButton text={`Vaciar carrito`} style={buttonStyle} onClick={() => handleClearCart()} />
        </div>
    );
}

export default CartTable;