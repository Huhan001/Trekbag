import { BackgroundHeading } from "./BackgroundHeading.jsx";
import { Footer } from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {Itemlist} from "./ItemList.jsx";
import {SideBar} from "./SideBar.jsx";

const App = () => {
  return (
    <>
      <BackgroundHeading />
      
      <main>
        <Header />
        <Itemlist />
        <SideBar />
      </main>
      
      <Footer />
    </>
  );
};

export default App;
