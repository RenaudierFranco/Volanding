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
        const fetchItem = async () => {
          try {
            const snapshot = await getDocs(collection(db, 'flight'));
            const items = snapshot.docs.map(doc => {
              return { id: doc.id, ...doc.data() };
            });
      
            const findItem = items.find(item => item.id === itemId);
            if (findItem) {
              setItem(findItem);
            }
          } catch (error) {
            console.error('Error al obtener documentos:', error);
          }
        };
      
        fetchItem();
      }, [itemId]);

    
      const orderPurchase = (e) => {
        e.preventDefault();
    
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      
        if (isLoggedIn) {
          const buyer = JSON.parse(localStorage.getItem('user'));
          const seatCount = parseInt(localStorage.getItem('count'), 10);
      
          if (!buyer) {
            console.log('Usuario no encontrado en el almacenamiento local');
            return;
          }
      
          const newOrder = {
            buyer: buyer,
            item: item,
            seat: seatCount,
            date: new Date(),
          };
      
          localStorage.setItem('newOrder', JSON.stringify(newOrder));
          console.log('Nueva Orden:', newOrder);
      
          const flightOrderCollection = collection(db, 'flightOrder');
          addDoc(flightOrderCollection, newOrder)
            .then(({ id }) => {
              console.log(`Id de reserva: ${id}`);
              setOrderId(id);
              alert(`¡Tus asientos han sido reservados! Tu código de reserva es: ${id}`);
              console.log('OrderId: ',orderId)
            })
            .catch(error => {
              console.error('Error al guardar la orden en Firestore:', error);
            });
      
          updateSeat();
          redirect();
        } else {
          console.log('El usuario no ha iniciado sesión');
        }
      };

const updateSeat = async () => {
  try {
    const flightRef = doc(db, 'flight', itemId);
    const documentSnapshot = await getDoc(flightRef);

    if (documentSnapshot.exists()) {
      const currentData = documentSnapshot.data();
      const currentSeatCount = currentData.seat;
      const bookedSeatCount = parseInt(localStorage.getItem('count'), 10);

      await updateDoc(flightRef, { seat: currentSeatCount - bookedSeatCount });

      console.log('Asientos actualizados en Firestore');
    } else {
      console.log('El documento del vuelo no existe');
    }
  } catch (error) {
    console.error('Error al actualizar los asientos:', error);
  }
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