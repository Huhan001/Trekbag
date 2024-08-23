import {Button} from "./Button.jsx";
import {useState} from "react";

export const AddItemForm = () => {
    const [Text, setText] = useState('');
    return (
        <>
            <form onSubmit={() => console.log(Text)}>
                <h2>Add an Item</h2>
                <input value={Text} onChange={(event) => setText(event.target.value)}/>
                <Button text= 'Add to List' style= 'btn'/>
            </form>
        </>
    )
}