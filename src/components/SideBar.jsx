import {AddItemForm} from "./AddItemForm.jsx";
import {ButtonGroup} from "./ButtonGroup.jsx";
import '../style/index.css'

export const SideBar = ({setItems}) => {
    return (
        <div className= 'sidebar'>
            <AddItemForm setItems ={setItems}/>
            <ButtonGroup />
        </div>
    )
}