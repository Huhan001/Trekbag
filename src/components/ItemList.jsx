import {Listings} from "../lib/constants.js";
import {useState} from "react";
export const Itemlist = () => {
    const [items, setItems] = useState(Listings)

    return (
        <ul>
            {items.map(lists =>
                <Item key ={lists.id} listing={lists} />
            )}
        </ul>
    )
}

const Item = ({listing}) => {
    return (
        <li className= 'item'>
            <label>
                <input type= 'checkbox' checked={listing.packed}/>
                {listing.name}
            </label>
            <button> ❌ </button>
        </li>
    )
}