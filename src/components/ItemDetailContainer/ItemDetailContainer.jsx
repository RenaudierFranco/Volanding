import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
// Logica

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
        getDocs(collection(db, 'Aeronave')).then((snapshot)=> {
            const aeronaves = snapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            console.log('aeronaves', aeronaves)
            setItems(aeronaves)
        })
    }, [])  

    return (

        <div>
            {items.map((item) => {
                return ( <ItemDetail key={item.id} item={item}/>)
            })
            }
   
        </div>

    )
}

export default ItemDetailContainer;