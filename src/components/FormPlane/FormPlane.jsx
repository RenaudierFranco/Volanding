import { Form } from 'bootstrap-4-react';


const FormPlane = () => {
    return(
        <Form>
            <Form.Group>
            <label htmlFor="exampleInputType1">Type</label>
            <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter plane model" />
            </Form.Group>

            <Form.Group>
            <label htmlFor="exampleInputVelocity1">Velocity</label>
            <Form.Input type="email" id="exampleInputVelocidad1" placeholder="Enter Velocity" />
            </Form.Group>

            <Form.Group>
            <label htmlFor="exampleInputSits1">Seating</label>
            <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter seating" />
            </Form.Group>

            <Form.Group>
            <label htmlFor="exampleInputConfort1">Comfort</label>
            <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter comfort" />
            </Form.Group>

            <Form.Group>
                <label htmlFor="exampleControlsFile1">Example file</label>
                <Form.File id="exampleControlsFile1"/>
            </Form.Group>
        </Form>
    )
}

export default FormPlane