import {Button} from "./Button.jsx";

const secondayButton = ['Mark all as complete','Mark all as incomplete',
    'Reset to initial','Remove all items']
export const ButtonGroup = () => {
    return (
        <section className= 'button-group'>
            {/*<Button text= 'Mark all as complete'  style= 'btn btn--secondary'/>*/}
            {/*<Button text= 'Mark all as incomplete'  style= 'btn btn--secondary'/>*/}
            {/*<Button text= 'Reset to initial'  style= 'btn btn--secondary'/>*/}
            {/*<Button text= 'Remove all items'  style= 'btn btn--secondary'/>*/}

            {secondayButton.map(inside =>
                <Button key ={inside} text= {inside} style='btn btn--secondary'/>)}
        </section>
    )
}