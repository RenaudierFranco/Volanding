import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, addDoc, doc, getDocs, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
import NavBar from "../NavBar/NavBar";


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [ orderId, setOrderId ] = useState('')

    const Navigate = useNavigate();
    const redirect = () => {
      Navigate('/home');
    };

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
            const buyer = JSON.parse(localStorage.getItem('user'))
            console.log(buyer)
            const newOrder = {
                buyer: buyer,
                item: item,
                seat: localStorage.getItem('count'),
                date: new Date(),
              }
            localStorage.setItem('newOrder', JSON.stringify(newOrder))
            console.log('new Order', newOrder)

            const flightOrderCollection = collection(db, 'flightOrder')
            addDoc(flightOrderCollection, newOrder).then(({id})=> setOrderId(id)).then(console.log(`Id de reserva: ${orderId}`))
           
            //no da el orederId cuando el usuario reserva el vuelo.
            alert(`¡Ya tenes tus asientos reservados! Tu código de reservas es: ${orderId}`)

            updateSeat(); 
            redirect();

        }else{
            console.log('user no encontrado');
        } 
    }

    const updateSeat = () => {
        getDoc(doc(db, 'flight', itemId)).then((documentSnapshot) => {
            const newStock = doc(db, 'flight', itemId);
            updateDoc(newStock, {seat: documentSnapshot.data().seat - localStorage.getItem('count')})

        });
      };
      


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