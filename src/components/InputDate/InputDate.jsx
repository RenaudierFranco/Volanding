import { 
    Alert, 
    Row, 
    Col, 
    InputGroup, 
    Form, 
    Button,  
    Card
} from 'bootstrap-4-react';
import { useEffect, useState } from "react";
import { db } from "../../Services/Firebase/Firebase";
import { collection, getDocs } from 'firebase/firestore'

const InputDate = (props) => {

    const [items, setItems] = useState([]);
    const [form, setForm] = useState({departure: "", arrival: ""});

    useEffect(()=> {
        getDocs(collection(db, 'flight')).then((snapshot)=>{
            const items = snapshot.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
              })
              setItems(items)
        })
    }, [items])

    const getForm = (e) => {
      const {name, value } = e.target
        setForm({...form, [name]: value});
    }

    const searchFlight = (e) => {
        e.preventDefault()
        console.log('search flight')
        const newItems = items.filter(
            item => item.arrival.toUpperCase() === form.arrival.toUpperCase())
        if(newItems.length === 0){
            props.sendData(items);
        }else{
            props.sendData(newItems);
        }

    }

    return (
        <Card w="75" h="100" shadow p="3" mt="3" mb="3" bg="light" rounded>
                <Alert primary className="text-center" mt="3" mb="3">Vuelos✈️</Alert>
                <Row>
                    <Col col="lg-3 md-12 sm-12" mt="3" mb="3">
                        <InputGroup className="input-group input-group-lg">
                            <Form.Input name="departure" type="text" placeholder="Origen" onChange={getForm}/>
                        </InputGroup>
                    </Col>
                    <Col col="lg-3 md-12 sm-12" mt="3" mb="3">
                        <InputGroup className="input-group input-group-lg">
                            <Form.Input name="arrival" type="text" placeholder="Destino" onChange={getForm}/>
                        </InputGroup>
                    </Col>
                    <Col col="lg-3 md-12 sm-12" mt="3" mb="3">
                        <InputGroup className="input-group input-group-lg">
                            <Form.Input type="date" placeholder="Partida" onChange={getForm}/>
                        </InputGroup>
                    </Col>
                    <Col col="lg-3 md-12 sm-12" mt="3" mb="3">
                        <InputGroup className="input-group input-group-lg">
                            <Button primary mx="auto" w="75" onClick={searchFlight}>Buscar</Button>
                        </InputGroup>
                    </Col>
                </Row>
        </Card>
    )
}

export default InputDate