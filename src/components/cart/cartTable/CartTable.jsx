import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'components/shared/buttons/Buttons';
import { CartContext } from 'contexts/contexts';
import ItemCount from 'components/product/itemCount/ItemCount';
import './cartTable.sass';

const CartTable = ({ currency }) => {

    const {
        cart,
        handleRemoveFromCart,
        handleClearCart,
        handleSubTotalPrice,
        handleTotalPrice,
        handleIncreaseItem,
        handleDecreaseItem
    }
        = React.useContext(CartContext);

    return (
        <div className='container'>
            <h1 className='yourCart'>{`tu carrito`}</h1>
            {cart.map((product) => (
                <div className='cartTable'>
                    <div className='tableCard'>
                        <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1
                                w-full overflow-hidden rounded-md bg-gray-200
                                group-hover:opacity-75 lg:aspect-none lg:h-80'
                        >
                            <Link to={`/product/${product.id}`}>
                                <img
                                    className='h-full w-full object-cover
                                       object-center lg:h-full lg:w-full'
                                    src={product.image}
                                    alt={product.name}
                                    title={product.name}
                                />
                            </Link>
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <Link to={`/product/${product.id}`}>
                                <h2 className='brand'>{product.brand}</h2>
                                <p className='name'>{product.name}</p>
                            </Link>
                            <p className='category'>{product.category}</p>
                            <p className='colour'>{`Color:`} {product.colour}</p>
                            <p className='greyHeader'>{`Precio unitario:`} {currency} {product.price}</p>
                            <h2 className='subTotalPrice'>
                                {`Sub-total:`} {currency} {handleSubTotalPrice(product)}
                            </h2>
                            <BlueButton
                                text={`Eliminar`}
                                onClick={() => handleRemoveFromCart(product.id)}
                            />
                        </div>
                    </div>
                    <ItemCount
                        addItem={() => handleIncreaseItem(product.id)}
                        removeItem={() => handleDecreaseItem(product.id)}
                        quantity={product.quantity}
                    />
                </div>
            ))}
            <div className='totalPrice'>
                {`Precio Total:`} {currency} {handleTotalPrice()}
            </div>
            <BlueButton
                style={{ width: '20%' }}
                text={`Confirmar compra`} />
            <WhiteButton
                style={{ width: '15%' }}
                text={`Vaciar carrito`}
                onClick={() => handleClearCart()}
            />
        </div>
    );
}

export default CartTable;