import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({});



    useEffect(() => {
        getDocs(collection(db, 'Vuelo')).then((snapshot)=> {
            const items = snapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setItem(items.find(item => item.id === itemId))
            console.log('item encontrado', item)

        })
    }, [itemId]);  

    return (
        <>
        
            {item.id === undefined?
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
            :

            <ItemDetail key={itemId} item={item} itemId={itemId}/>
            }
        
        </>
    )
}

export default ItemDetailContainer;