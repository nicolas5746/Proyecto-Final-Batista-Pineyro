import React from 'react';
import { ItemContext } from 'contexts/contexts';
import ItemList from 'components/product/itemList/ItemList';
import Spinner from 'components/shared/spinner/Spinner';
import './home.sass';

const Home = () => {

  const { loaded } = React.useContext(ItemContext);

  return (
    <main className='home'>
      {loaded === true ?
        <ItemList />
        :
        <Spinner />
      }
    </main>
  );
}

export default Home;