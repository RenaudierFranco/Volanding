import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from 'firebase/firestore'


const ItemListContainer = () => {

const [items, setItems] = useState([])

useEffect(()=> {
    getDocs(collection(db, 'flight')).then((snapshot)=>{
        const Destino = snapshot.docs.map(doc =>{
            return {id: doc.id, ...doc.data()}
          })
          console.log(`Productos Firebase: ${Destino}`)
          setItems(Destino)
          console.log(items)
    })

}, [items])

console.log('iteeems', items)

    return (
        <>
        {items.length == 0?
        <div class="d-flex justify-content-center mb-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        :
        <ItemList items={items}/>
        }
        </>
    )
}

export default ItemListContainer;