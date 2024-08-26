import {EmptyView} from "./EmptyView.jsx";
import Select from "react-select";
import {optionProvider} from "../lib/constants.js";
import {useMemo, useState} from "react";

export const Itemlist = ({items, handleDeletion, handleCheck}) => {

    const [sortby, setSortby] = useState('default');

    /* useMemo is used to cache the data and will run it if it changes. or update it if it changes */
    const sortedItems = useMemo(() =>
        [...items].sort((a,b) => {
            return sortby === 'packed' && b.packed - a.packed ||
                sortby === 'unpacked' && a.packed - b.packed ||
                items;
         })
    , [sortby, items]);

    return (
        <ul className= 'item-list'>

            {/*conditional rendering*/}
            {/*never return zero in jsx it will print it out*/}
            {items.length === 0 && <EmptyView />}

            {items.length > 1 &&
                <section className= 'sorting'>
                    <Select
                        onChange={option => setSortby(option.value)}
                        options={optionProvider} defaultValue={optionProvider[0]}/>
                </section>
            }

            {sortedItems.map(lists =>
                        <Item key ={lists.id}
                              listing={lists}
                              handleDeletion ={handleDeletion}
                              handleCheck ={handleCheck}
                />
            )}
        </ul>
    )
}

const Item = ({listing, handleDeletion, handleCheck}) => {
    return (
        <li className= 'item'>
            <label>
                <input
                    type= 'checkbox'
                    checked={listing.packed}
                    onChange={() => handleCheck(listing.id)}
                />
                {listing.name}
            </label>
            <button onClick={() =>handleDeletion(listing.id)}> ❌ </button>
        </li>
    )
}