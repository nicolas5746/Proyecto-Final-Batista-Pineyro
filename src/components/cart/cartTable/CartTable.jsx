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
            {cart.map((item) => (
                <div className='cartTable'>
                    <div className='tableCard'>
                        <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1
                                w-full overflow-hidden rounded-md bg-gray-200
                                group-hover:opacity-75 lg:aspect-none lg:h-80'
                        >
                            <Link to={`/product/${item.id}`}>
                                <img
                                    className='h-full w-full object-cover
                                       object-center lg:h-full lg:w-full'
                                    src={item.image}
                                    alt={item.name}
                                    title={item.name}
                                />
                            </Link>
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <Link to={`/product/${item.id}`}>
                                <h2 className='brand'>{item.brand}</h2>
                                <p className='name'>{item.name}</p>
                            </Link>
                            <p className='category'>{item.category}</p>
                            <p className='colour'>{`color:`} {item.colour}</p>
                            <p className='greyHeader'>{`Precio unitario:`} {currency} {item.price}</p>
                            <h2 className='subTotalPrice'>{`Sub-total:`} {currency} {handleSubTotalPrice(item)}</h2>
                            <BlueButton
                                text={`Eliminar`}
                                onClick={() => handleRemoveFromCart(item.id)}
                            />
                        </div>
                    </div>
                    <ItemCount
                        addItem={() => handleIncreaseItem(item.id)}
                        removeItem={() => handleDecreaseItem(item.id)}
                        quantity={item.quantity}
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