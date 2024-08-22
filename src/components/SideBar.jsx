import {AddItemForm} from "./AddItemForm.jsx";
import {ButtonGroup} from "./ButtonGroup.jsx";
import '../style/index.css'

export const SideBar = () => {
    return (
        <div className= 'sidebar'>
            <AddItemForm />
            <ButtonGroup />
        </div>
    )
}