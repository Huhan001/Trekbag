import {Button} from "./Button.jsx";
import {secondayButton} from "../lib/constants.js";

export const ButtonGroup = ({handleRemoveAllItem, handlePacked, handleReset, handleUnpacked}) => {

    return (
        <section className= 'button-group'>
            {secondayButton.map(inside =>
                <Button
                    onUnpacked ={handleUnpacked}
                    onRemoveAll ={handleRemoveAllItem}
                    onPackedAll ={handlePacked}
                    onResetAll ={handleReset}
                    text ={inside}
                    key = {inside}
                    style='btn btn--secondary' />
                )
            }
        </section>
    )
}