import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from 'middlewares/firebase/firebaseConfig';
import { ItemContext } from 'contexts/contexts';

const ItemProvider = ({ children }) => {

    const [items, setItems] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const getItems = async () => {
        setLoaded(true);
        const itemsRef = collection(database, 'items');
        await getDocs(itemsRef)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    alert(`Error al cargar datos. Intente nuevamente.`);
                }
                setLoaded(false);
                setItems(snapshot.docs.map((doc) => {
                    return ({ id: doc.id, ...doc.data() });
                }));
            });
    }

    const values = { items, getItems, loaded }

    return (
        <ItemContext.Provider value={values}>{children}</ItemContext.Provider>
    );
}

export default ItemProvider;