export const Itemlist = ({items, handleDeletion, handleCheck}) => {

    return (
        <ul>
            {items.map(lists =>
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
                    onChange={() => handleCheck(listing.id)}/>
                {listing.name}
            </label>
            <button onClick={() =>handleDeletion(listing.id)}> ❌ </button>
        </li>
    )
}