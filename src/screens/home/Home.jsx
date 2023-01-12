import React from 'react';
import { ItemContext } from 'contexts/contexts';
import ItemList from 'components/product/itemList/ItemList';
import Spinner from 'components/shared/spinner/Spinner';
import './home.sass';

const Home = () => {

  const { items } = React.useContext(ItemContext);

  return (
    <main className='home'>
      {items.length > 0
        ?
        <ItemList />
        :
        <Spinner />
      }
    </main>
  );
}

export default Home;