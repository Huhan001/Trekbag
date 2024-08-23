import {Button} from "./Button.jsx";
import {useRef, useState} from "react";

export const AddItemForm = ({setItems}) => {
    const [Text, setText] = useState('');
    const inputRef = useRef();

    const submitted = (event) => {
        event.preventDefault();

    //basic validator
         if(!Text) {
               alert("need to supply something!");
               inputRef.current.focus()
    //this return ejects from the function
               return;
         }

        const addition = {
            name: Text,
            packed: true,
            id: new Date().getMilliseconds()
        }

        inputRef.current.focus()
        setItems((prev) => [...prev, addition])
        setText('');
    }

    return (
        <>
            <form onSubmit={submitted}>
                <h2>Add an Item</h2>
                <input
                    ref={inputRef}
                    value={Text}
                    onChange={(event) => setText(event.target.value)}
                    autoFocus={true}
                />
                <Button text= 'Add to List' style= 'btn'/>
            </form>
        </>
    )
}

// 🔥 before hand the form submit had a wierd behaviour but ot stop it we need to supply a prevent default