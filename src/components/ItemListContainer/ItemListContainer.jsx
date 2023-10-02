import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({data}) => {

const [items, setItems] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'flight'));
      const docs = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });

      if (data === undefined) {
        setItems(docs);
      } else {
        setItems(data);
      }
    } catch (error) {
      console.error('Error al obtener documentos:', error);
    }
  };

  fetchData();
}, [data]);

  return (
    <>
      {items.length === 0?
        <div className="d-flex justify-content-center mb-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        :
        <ItemList items={items}/>
      }
    </>
  )
};

export default ItemListContainer;