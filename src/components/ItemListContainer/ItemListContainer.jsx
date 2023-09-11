import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from 'firebase/firestore'


const ItemListContainer = () => {

const [items, setItems] = useState([])

useEffect(()=> {
    getDocs(collection(db, 'Vuelo')).then((snapshot)=>{
        const Destino = snapshot.docs.map(doc =>{
            return {id: doc.id, ...doc.data()}
          })
          console.log(`Productos Firebase: ${Destino}`)
          setItems(Destino)
          console.log(items)
    })

}, [items])

    return (
        <>
            {
                items === undefined ?
                <h1>Cargando contenido...</h1>
                :
                <ItemList items={items}/>
            }
        </>
    )
}

export default ItemListContainer;