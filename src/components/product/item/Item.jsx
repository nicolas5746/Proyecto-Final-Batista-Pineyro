import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from 'contexts/contexts';
import IsinCart from 'components/cart/isInCart/IsInCart';

const Item = ({ item }) => {

    const { handleAddToCart } = React.useContext(CartContext);

    const [addItem] = React.useState(1);
    const [added, setAdded] = React.useState(false);

    const handleAddItem = () => {
        if (addItem === 1) {
            setAdded(true);
            handleAddToCart({
                id: item.id,
                brand: item.brand,
                name: item.name,
                image: item.image,
                category: item.category,
                colour: item.colour,
                price: item.price,
                stock: item.stock,
                quantity: addItem,
            });
        }
    }

    return (
        <div className='group relative'>
            <Link to={`/product/${item.id}`}>
                <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden
                                rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'
                >
                    <img
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                    />
                </div>
            </Link >
            <div className='mt-4 flex justify-between'>
                <h2 className='brand'>{item.brand}</h2>
                <p className='name'>{item.name}</p>
                <p className='price' >{`usd`} {item.price}</p>
                <IsinCart added={added} onClick={() => handleAddItem()} />
            </div>
        </div>
    );
}

export default Item;