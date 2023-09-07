import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import NavBar from "../NavBar/NavBar";
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from 'firebase/firestore'
import { Container } from 'bootstrap-4-react';



const ItemListContainer = () => {

const [items, setItems] = useState([])

useEffect(()=> {
    getDocs(collection(db, 'Destino')).then((snapshot)=>{
        const Destino = snapshot.docs.map(doc =>{
            return {id: doc.id, ...doc.data()}
          })
          console.log(`Productos Firebase: ${Destino}`)
          setItems(Destino)
          console.log(items)
    })

}, [items])

    return (
        <div>
            <NavBar/>
            <Container className="m-3 d-flex d-inline">
                    <ItemList items={items}/>
            </Container>          
        </div>
        
    )

}

export default ItemListContainer;