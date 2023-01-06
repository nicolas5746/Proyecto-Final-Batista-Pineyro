import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'components/shared/buttons/Buttons';
import { CartContext } from 'contexts/contexts';

const Item = ({ product, currency }) => {

    const { handleAddToCart } = React.useContext(CartContext);

    const [addItem] = React.useState(1);
    const [added, setAdded] = React.useState(false);

    const handleAddItem = () => {
        if (addItem === 1) {
            setAdded(true);
            handleAddToCart({
                id: product.id,
                brand: product.brand,
                name: product.name,
                image: product.image,
                category: product.category,
                colour: product.colour,
                price: product.price,
                stock: product.stock,
                quantity: addItem,
            });
        }
    }

    return (
        <div className='group relative'>
            <Link to={`/product/${product.id}`}>
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
            </Link >
            <div className='mt-4 flex justify-between'>
                <h2 className='brand'>{product.brand}</h2>
                <p className='name'>{product.name}</p>
                <p className='price' >{currency} {product.price}</p>
                {added ?
                    (<>
                        <Link to='/cart'>
                            <WhiteButton
                                style={{ textTransform: 'uppercase', width: '120%' }}
                                text={`Ir al carrito`} />
                        </Link>
                    </>)
                    :
                    (<>
                        <BlueButton
                            style={{ textTransform: 'uppercase' }}
                            text={`agregar al carrito`}
                            onClick={() => handleAddItem()}
                        />
                    </>)
                }
            </div>
        </div>
    );
}

export default Item;