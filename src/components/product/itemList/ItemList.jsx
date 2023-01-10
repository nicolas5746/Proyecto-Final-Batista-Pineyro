import React from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from 'contexts/contexts';
import Greeting from 'components/home/greeting/Greeting';
import Item from 'components/product/item/Item';
import Search from 'components/home/search/Search';

const ItemList = () => {

    const [filter, setFilter] = React.useState('');

    const { items, getItems } = React.useContext(CartContext);

    let { sortBy } = useParams();

    React.useEffect(() => {
        getItems();
    }, [getItems]);

    return (
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Greeting greeting={`Las mejores marcas al mejor precio del mercado`} />
            <Search filter={filter} setFilter={setFilter} />
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {sortBy ?
                    items
                        .filter((item) => item.category === sortBy)
                        .filter((item) => item.brand.toLowerCase().match(filter.toLowerCase()))
                        .map((item) =>
                            <Item item={item} />)
                    :
                    items
                        .filter((item) => item.brand.toLowerCase().match(filter.toLowerCase()))
                        .map((item) =>
                            <Item item={item} />)
                }
            </div>
        </div>
    );
}

export default ItemList;