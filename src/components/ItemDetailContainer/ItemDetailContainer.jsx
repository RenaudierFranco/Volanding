import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
import NavBar from "../NavBar/NavBar";


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        getDocs(collection(db, 'flight')).then((snapshot)=> {
            const items = snapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            const findItem = items.find(item => item.id === itemId)
            if (findItem){
                setItem(findItem)
            }
        })
    }, [itemId]);
    
    const orderPurchase = (e) => {
        e.preventDefault()
        console.log('orderPurchase')
        console.log('localStorage isLoggedIn ', localStorage.getItem('isLoggedIn'))
        
        if( localStorage.getItem('isLoggedIn') === 'true'){
            const buyer = localStorage.getItem('user')
            console.log(buyer)
            const newOrder = {
                buyer: buyer,
                item: item,
                seat: localStorage.getItem('count'),
                date: new Date(),
              }
            localStorage.setItem('newOrder', newOrder)
            console.log('new Order', newOrder)
/*
        ====== Modificar el stock en firebase, guardar el Id del vuelo generado ======
*/
        }else{
            console.log('user no encontrado');
        } 
    }


    return (
        <>
            <NavBar/>
            <div className="mt-5">
            {item.id === undefined?
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
            :
            <ItemDetail key={itemId} item={item} itemId={itemId} orderPurchase={orderPurchase}/>
            }
            </div>
        </>
    )
}

export default ItemDetailContainer;