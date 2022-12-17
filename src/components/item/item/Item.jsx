import { Link } from 'react-router-dom';

const Item = ({ id, brand, name, imageSrc, currency, price, addItem }) => {
    return (
        <div className='group relative'>
            <Link to={`/product/${id}`}>
                <div className='min-h-80 text-gray-500 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                    <img
                        className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                        src={imageSrc}
                        alt={name}
                        title={name}
                    />
                </div>
            </Link >
            <div className='mt-4 flex justify-between'>
                <h2 className='brand'>{brand}</h2>
                <p className='name'>{name}</p>
                <p className='price' >{currency} {price}</p>
            </div>
        </div>
    );
}

export default Item;