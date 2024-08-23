export const Itemlist = ({items}) => {

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