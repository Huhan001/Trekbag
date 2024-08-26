import {Logo} from "./Logo.jsx";
import {Counter} from "./Counter.jsx";

export const Header = ({handleCount}) => {
    return (
        <header>
            <Logo />
            <Counter handleCount ={handleCount}/>
        </header>
    )
}