import NavBar from "../NavBar/NavBar";
import SlickTrack from "../SlickTrack/SlickTrack";
import { Row } from 'bootstrap-4-react';
import InputDate from "../InputDate/InputDate";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useState } from "react";

const HomeScreenContainer = () => {

    const [ data, setData] = useState()

    const getData = (data) => {
        if(data.length === 0){
            data = undefined
        }else{
            setData(data);
        }

      };

    return (
        <>
            <NavBar/>
            <SlickTrack/>
            <Row className="d-flex justify-content-center" mw="100">
                <InputDate sendData={getData}/>
            </Row>
            <Row className="m-3">
                <ItemListContainer data={data}/> 
            </Row>
        </>
    )
}

export default HomeScreenContainer;