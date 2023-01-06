import React from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getProductById } from 'middlewares/getData';
import ItemDetail from 'components/product/itemDetail/ItemDetail';

const ItemCollection = () => {

    const [product, setProduct] = React.useState([]);

    let { id } = useParams();

    React.useEffect(() => {

        const db = getFirestore();

        const itemCollectionRef = collection(db, 'ItemCollection');

        getDocs(itemCollectionRef).then((snapshot) => {
            if (snapshot.size === 0) {
                alert(`Sin resultados!`);
            }
            snapshot.docs.map((doc) => {
                return ({ id: doc.id, ...doc.data() });
            });
        });
        getProductById(parseInt(id), setProduct);
    }, [id, setProduct]);

    return (
        <ItemDetail product={product} currency={`USD`} />
    );
}

export default ItemCollection;
