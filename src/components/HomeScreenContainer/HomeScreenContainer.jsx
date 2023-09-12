import NavBar from "../NavBar/NavBar";
import {  
Row, 
Col, 
Carousel, 
BImg
} from 'bootstrap-4-react';
import InputDate from "../InputDate/InputDate";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const HomeScreenContainer = () => {

    return (
        <>
            <NavBar/>
        
            <Carousel w="100" id="carouselExampleIndicators" text="center" h="50" shadow p="3" mb="5" bg="light" rounded>
                <Carousel.Indicators>
                <Carousel.Indicator target="#carouselExampleIndicators" to="0" active />
                <Carousel.Indicator target="#carouselExampleIndicators" to="1" />
                <Carousel.Indicator target="#carouselExampleIndicators" to="2" />
                </Carousel.Indicators>
                <Carousel.Inner>
                <Carousel.Item active><BImg display="block" w="100" src={
                    "https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=600"
                    } /></Carousel.Item>
                <Carousel.Item><BImg display="block" w="100" src={
                    "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=600"
                    } /></Carousel.Item>
                <Carousel.Item><BImg display="block" w="100" src={
                    "https://images.pexels.com/photos/18201084/pexels-photo-18201084/free-photo-of-ciudad-puesta-de-sol-punto-de-referencia-edificios.jpeg?auto=compress&cs=tinysrgb&w=600"
                    } /></Carousel.Item>
                </Carousel.Inner>
                <Carousel.Prev href="#carouselExampleIndicators">
                <Carousel.Prev.Icon />
                </Carousel.Prev>
                <Carousel.Next href="#carouselExampleIndicators">
                <Carousel.Next.Icon />
                </Carousel.Next>
            </Carousel>
            <Row className="d-flex justify-content-center">
                <InputDate/>
            </Row>
            <Row className="m-3">
                <ItemListContainer/> 
            </Row>
        </>
    )
}

export default HomeScreenContainer;