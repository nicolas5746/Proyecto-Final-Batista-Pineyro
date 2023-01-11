import React from 'react';
import { ItemContext } from 'contexts/contexts';
import ItemDetail from 'components/product/itemDetail/ItemDetail';
import Spinner from 'components/shared/spinner/Spinner';

const Product = () => {

    const { loaded } = React.useContext(ItemContext);

    return (
        <>
            {loaded === true ?
                <ItemDetail />
                :
                <Spinner />
            }
        </>

    );
}

export default Product;