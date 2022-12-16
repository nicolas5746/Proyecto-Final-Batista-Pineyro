import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from 'contexts/contexts';
import { BlueButton, WhiteButton } from 'components/shared/buttons/Buttons';
import ItemCount from 'components/product/itemCount/ItemCount';

const ItemDetail = ({ product, currency }) => {
    const { handleAddToCart, handleAddItem, handleRemoveItem } = React.useContext(CartContext);
    const [itemCount, setItemCount] = React.useState(0);
    const [selectedCount, setSelectedCount] = React.useState(false);

    let buttonStyle = { width: '25%' }

    const handleBuyItem = () => {
        if (itemCount > 0) {
            setSelectedCount(true);
            handleAddToCart({
                id: product.id,
                brand: product.brand,
                name: product.name,
                image: product.image,
                category: product.category,
                colour: product.colour,
                price: product.price,
                stock: product.stock,
                count: itemCount,
                setCount: setItemCount,
            });
        }
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                    <img
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                        src={product.image}
                        alt={product.name}
                        title={product.name}
                    />
                </div>
                <div className='mt-4 flex justify-between'>
                    <h2 className='brand'>{product.brand}</h2>
                    <p className='name'>{product.name}</p>
                    <p className='category'>{product.category}</p>
                    <p className='colour'>{`Color:`} {product.colour}</p>
                    <p className='price'>{currency} {product.price}</p>
                    <p className='greyHeader'>{`Código del artículo:`} {product.id}</p>
                    <p className='greyHeader'>{`Stock disponible:`} {product.stock}</p>
                </div>
                {selectedCount ?
                    (<>
                        <Link to='/cart'>
                            <BlueButton text={`Finalizar compra`} />
                        </Link>
                        <Link to='/'>
                            <WhiteButton text={`Continuar comprando`} />
                        </Link>
                    </>)
                    :
                    (<>
                        <ItemCount
                            add={() => handleAddItem(itemCount, setItemCount, product.stock)}
                            remove={() => handleRemoveItem(itemCount, setItemCount)}
                            itemCount={itemCount}
                            buyItem={() => handleBuyItem()}
                            addToCart={`agregrar al carrito`}
                        />
                        <Link to='/'>
                            <BlueButton text={`Atrás`} style={buttonStyle} />
                        </Link>
                    </>)
                }
            </div>
        </div>
    );
}

export default ItemDetail;