import React from 'react';
import { ItemContext } from 'contexts/contexts';
import ItemDetail from 'components/product/itemDetail/ItemDetail';
import Spinner from 'components/shared/spinner/Spinner';

const Product = () => {

    const { items } = React.useContext(ItemContext);

    return (
        <>
            {items.length > 0
                ?
                <ItemDetail />
                :
                <Spinner />
            }
        </>
    );
}

export default Product;