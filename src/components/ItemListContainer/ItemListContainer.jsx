import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
<<<<<<< HEAD
//import { db } from "../../Services/Firebase/Firebase";
//import { collection, getDocs } from 'firebase/firestore';
import "../../Services/Collections/FlightCollection.json";
=======
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

>>>>>>> ignacio


/*
const ItemListContainer = ({data}) => {

const [items, setItems] = useState([]);


useEffect(()=> {

    getDocs(collection(db, 'flight')).then((snapshot)=>{
        const docs = snapshot.docs.map(doc =>{
            return {id: doc.id, ...doc.data()}
          })
          if (data === undefined){
            setItems(docs)
          } else {
            setItems(data)
          }
    })

}, [data])


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
}
*/


const ItemListContainer = ({ data }) => {
const [items, setItems] = useState([]);

useEffect(() => {
  if (data === undefined) {
    fetch('./FlightCollection.json')
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setItems(json);
        } else {
          console.error("JSON data is not an array.");
        }
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }
}, [data]);

  return (
    <>
      {items.length === 0 ? (
        <div className="d-flex justify-content-center mb-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;