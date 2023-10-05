import NavBar from "../NavBar/NavBar";
import SlickTrack from "../SlickTrack/SlickTrack";
import { Row } from 'bootstrap-4-react';
import InputDate from "../InputDate/InputDate";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import React, { useState } from "react";
import Footer from "../Footer/Footer";

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
            <div className="d-flex justify-content-center m-3">
                <InputDate sendData={getData}/>
            </div>
            <Row className="m-3 d-flex justify-content-center">
                <ItemListContainer data={data}/> 
            </Row>
            <Footer/>
        </>
    )
}

export default HomeScreenContainer;