import { BackgroundHeading } from "./BackgroundHeading.jsx";
import { Footer } from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {Itemlist} from "./ItemList.jsx";
import {SideBar} from "./SideBar.jsx";
import {Listings} from "../lib/constants.js";
import {useState} from "react";

const App = () => {
  const [items, setItems] = useState(Listings)

  return (
    <>
      <BackgroundHeading />
      
      <main>
        <Header />
        <Itemlist items ={items}/>
        <SideBar setItems ={setItems}/>
      </main>
      
      <Footer />
    </>
  );
};

export default App;
