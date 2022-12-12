import ItemDetail from 'components/product/itemDetail/ItemDetail';
import './itemDetailContainer.sass';

const ItemDetailContainer = ({ product }) => {
    return (
        <div className='itemDetailContainer'>
            <ItemDetail product={product} currency={`USD`} />
        </div>
    );
}

export default ItemDetailContainer;