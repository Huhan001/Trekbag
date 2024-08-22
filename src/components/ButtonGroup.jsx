import {Button} from "./Button.jsx";

export const ButtonGroup = () => {
    return (
        <section className= 'button-group'>
            <Button text= 'Mark all as complete'  style= 'btn btn--secondary'/>
            <Button text= 'Mark all as incomplete'  style= 'btn btn--secondary'/>
            <Button text= 'Reset to initial'  style= 'btn btn--secondary'/>
            <Button text= 'Remove all items'  style= 'btn btn--secondary'/>
        </section>
    )
}