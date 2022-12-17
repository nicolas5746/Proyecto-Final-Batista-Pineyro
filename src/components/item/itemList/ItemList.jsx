import React from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getAllProducts } from 'middlewares/getData';
import Greeting from 'components/home/greeting/Greeting';
import Item from 'components/item/item/Item';
import Search from 'components/home/search/Search';

const ItemList = () => {
    const [products, setProducts] = React.useState([]);
    const [filter, setFilter] = React.useState('');
    const { sortBy } = useParams();

    React.useEffect(() => {

        const db = getFirestore();

        const itemCollectionRef = collection(db, 'ItemCollection');

        getDocs(itemCollectionRef).then((snapshot) => {
            if (snapshot.size === 0) {
                alert(`Sin resultados!`);
            }
            snapshot.docs.map((doc) => {
                return ({ sortBy: doc.category, ...doc.data() });
            });
        });
        getAllProducts(setProducts);
    }, [sortBy]);

    return (
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Greeting greeting={`Bienvenidos a Tienda Americana de Calzados`} />
            <Search filter={filter} setFilter={setFilter} />
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {sortBy ?
                    products
                        .filter((p) => p.category === sortBy)
                        .filter((p) => p.brand.toLowerCase().match(filter.toLowerCase()))
                        .map((product) =>
                            <Item
                                id={product.id}
                                brand={product.brand}
                                name={product.name}
                                imageSrc={product.image}
                                currency={`usd`}
                                price={product.price}
                            />)
                    :
                    products
                        .filter((p) => p.brand.toLowerCase().match(filter.toLowerCase()))
                        .map((product) =>
                            <Item
                                id={product.id}
                                brand={product.brand}
                                name={product.name}
                                imageSrc={product.image}
                                currency={`usd`}
                                price={product.price}
                            />)
                }
            </div>
        </div>
    );
}

export default ItemList;