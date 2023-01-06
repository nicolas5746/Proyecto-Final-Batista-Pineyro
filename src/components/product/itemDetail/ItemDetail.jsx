const ItemDetail = ({ product, currency }) => {

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
            </div>
        </div>
    );
}

export default ItemDetail;