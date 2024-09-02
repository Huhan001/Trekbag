import {AddItemForm} from "./AddItemForm.jsx";
import {ButtonGroup} from "./ButtonGroup.jsx";
import '../style/index.css'

export const SideBar = ({items, setItems, handleRemoveAllItems, handlePacked, handleReset, handleUnpacked}) => {
    const handleNewList = (Text) => {

        const addToList = {
          name: Text,
          packed: false,
          id: new Date().getMilliseconds()
        }

        const newlist = [...items, addToList]
        setItems(newlist)
    }

    return (
        <div className= 'sidebar'>
            <AddItemForm handleNewList ={handleNewList}/>
            <ButtonGroup
                handleRemoveAllItem ={handleRemoveAllItems}
                handlePacked ={handlePacked}
                handleReset ={handleReset}
                handleUnpacked ={handleUnpacked}
            />
        </div>
    )
}