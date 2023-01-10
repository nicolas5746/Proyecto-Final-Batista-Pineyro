import React from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from 'contexts/contexts';

const ItemDetail = () => {

    const { items, getItems } = React.useContext(CartContext);

    let { id } = useParams();

    React.useEffect(() => {
        getItems();
    }, [getItems]);

    return (
        <div className='container'>
            {items
                .filter((item) => item.id === id)
                .map((item) => (
                    <div className='card'>
                        <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                            <img
                                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                                src={item.image}
                                alt={item.name}
                                title={item.name}
                            />
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <h2 className='brand'>{item.brand}</h2>
                            <p className='name'>{item.name}</p>
                            <p className='category'>{item.category}</p>
                            <p className='colour'>{`color:`} {item.colour}</p>
                            <p className='price'>{`usd`} {item.price}</p>
                            <p className='greyHeader'>{`Talles disponibles:`} {item.size + ``}</p>
                            <p className='greyHeader'>{`Código del artículo:`} {item.id}</p>
                            <p className='greyHeader'>{`Stock disponible:`} {item.stock}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ItemDetail;