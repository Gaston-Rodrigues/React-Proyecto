import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { collectionProducts, getItemsFromDb } from '../../firebase/firebase';
import { query, where } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlParams = useParams();
  const urlIdParams = urlParams.id;

  useEffect(() => {
    setLoading(true);
    if (urlIdParams !== undefined) {
      const urlIdParams =
        urlParams.id[0].toUpperCase() + urlParams.id.substring(1);

      const filterByCategory = query(
        collectionProducts,
        where('brand', '==', urlIdParams)
      );
      getItemsFromDb(filterByCategory, setItems, setLoading);
    } else {
      getItemsFromDb(collectionProducts, setItems, setLoading);
    }
  }, [urlParams.id, urlIdParams]);

  if (loading) return <h1 className='loading'>Loading...</h1>;

  return (
    <section className='home'>
      <div className='container-example'>
        <ItemList items={items} />
      </div>
    </section>
  );
};
 