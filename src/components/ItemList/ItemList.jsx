import Item from "../Item/Item";
import { Container } from "bootstrap-4-react";


const ItemList = ({items}) => {

    return (
        <Container className="m-3">
            {items.map(item => {
                return(
                <Item key={item.id} item={item} /> )
            })}
        </Container>
    )
}

export default ItemList;