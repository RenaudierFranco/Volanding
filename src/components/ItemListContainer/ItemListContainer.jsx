import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import NavBar from "../NavBar/NavBar";
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from 'firebase/firestore'
import { Container, Jumbotron, Display4} from 'bootstrap-4-react';
import InputDate from "../InputDate/InputDate";



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
        <div>
            <Container>
                <NavBar/>
            </Container>

            <Container>
                <Jumbotron fluid>
                    <Container>
                        <Display4>Lorem Ipsum Sanguche de Batata</Display4>
                        <p>El carrusel es una mierda amigo</p>
                    </Container>
                </Jumbotron>
            </Container>

            <Container className="m-3 d-flex d-inline">
                <InputDate/>
                <ItemList items={items} style='justifycontent=end'/>
                <ItemList items={items}/>
                <ItemList items={items}/>
            </Container>          
        </div>
    )
}

export default ItemListContainer;