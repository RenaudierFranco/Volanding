import Item from "../Item/Item";
import { Container } from "bootstrap-4-react";


const ItemList = ({items}) => {

    return (
        <>
            {items.map(item => {
                return(
                <Item key={item.id} item={item} /> )
            })}
        </>
    )
}

export default ItemList;