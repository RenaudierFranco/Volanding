import { Form, Button } from 'bootstrap-4-react';
import { useState } from 'react';
import { db } from '../../Services/Firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore';


const FormFlight = () => {
    const [form, setForm] = useState({origen:'', destino:'', horario:'', duracion:0, avion:'', lugaresDisponibles:0})

    const [user, setUser] = useState({})

    const getForm = (e) => {
        const {name, value } = e.target
        setForm({...form, [name]: value});

        console.log(form)
    }

    const createFlight = (e) => {
        e.preventDefault()

        const newFlight = form

        const flightCollection = collection(db, 'Vuelo')
        addDoc(flightCollection, newFlight)
    }

    return(
        <Form>
            <Form.Group>
                <label htmlFor="exampleInputOrigin1">Origen</label>
                <Form.Input type="text" name="origen" id="exampleInputOrigin1" placeholder="Origen del vuelo" onChange={getForm}/>
            </Form.Group>

            <Form.Group>
                <label htmlFor="exampleInputDestiny1">Destino</label>
                <Form.Input type="text" name="destino" id="exampleInputDestiny1" placeholder="Destino del vuelo" onChange={getForm}/>
            </Form.Group>

            <Form.Group>
                <label htmlFor="exampleInputSchedule1">Horario</label>
                <Form.Input type="text" name="horario" id="exampleInputSchedule1" placeholder="Horario del vuelo" onChange={getForm}/>
            </Form.Group>

            <Form.Group>
                <label htmlFor="exampleInputDuration1">Duracion</label>
                <Form.Input type="text" name="duracion" id="exampleInputDuration1" placeholder="Duracion del vuelo" onChange={getForm}/>
            </Form.Group>

            <Form.Group>
                <label htmlFor="exampleInputPlane1">Avion</label>
                <Form.Input type="text" name="avion" id="exampleInputPlane1" placeholder="Tipo de avion" onChange={getForm}/>
            </Form.Group>

            <Form.Group>
                <label htmlFor="exampleInputAvailablePlaces1">Lugares Disponibles</label>
                <Form.Input type="text" name="lugaresDisponibles" id="exampleInputAvailablePlaces1" placeholder="Lugares Disponibles" onChange={getForm}/>
            </Form.Group>

            <Button primary type="submit" onClick={createFlight}>Enviar</Button>
        </Form>
    )
}

export default FormFlight;