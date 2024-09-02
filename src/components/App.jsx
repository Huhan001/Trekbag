import { BackgroundHeading } from "./BackgroundHeading.jsx";
import { Footer } from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {Itemlist} from "./ItemList.jsx";
import {SideBar} from "./SideBar.jsx";
import {Listings} from "../lib/constants.js";
import {useEffect, useState} from "react";

const App = () => {
//  📌 one alternative
//  const localstorage = JSON.parse(localStorage.getItem('items'))
//  const [items, setItems] = useState(localstorage || Listings)

//📌 second alternative || safe and good.
  const [items, setItems] = useState(() => {
      return JSON.parse(localStorage.getItem('items'))|| Listings})

  const handleCheckedCount = () => {
    const checked = items.filter(item => item.packed === true).length;
    const total = items.length;
    return {total: total, checked: checked }
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }

  const handleReset = () => {
    setItems(Listings);
  }

  const handleDeletion = (id) => {
    const newlyDeleted = items.filter(item => item.id !== id)
    setItems(newlyDeleted)
  }

  const handleChecked = (id) => {
    const check = items.map(item => {
      return item.id === id ? {...item, packed: !item.packed}: item;
    })
    setItems(check)
    }


  const handlePacked = () => {
    /* to change an object always unpack everything via spread and
    supply the variable you wish to edit as an extra variable in
    order to overide the previous value thats within the const. */
    const newItems = items.map(item => {
      return {...item, packed:true}
    })
    setItems(newItems)
  }

  const handleUnpacked = () => {
    const newItems = items.map(item => {
      return {...item, packed:false}
    })
    setItems(newItems)
  }

//📌 adding local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <>
      <BackgroundHeading />
      
      <main>
        <Header handleCount ={handleCheckedCount} />
        <Itemlist
          items = {items}
          handleDeletion = {handleDeletion}
          handleCheck = {handleChecked}
        />
        <SideBar
          items ={items}
          setItems = {setItems}
          handleRemoveAllItems ={handleRemoveAllItems}
          handlePacked ={handlePacked}
          handleReset ={handleReset}
          handleUnpacked ={handleUnpacked}
        />
      </main>
      
      <Footer />
    </>
  );
};

export default App;
