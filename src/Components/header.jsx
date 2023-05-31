import { useContext } from "react";
import { toggleTheme } from "../App";
import Toggle from "./toggle";

const Header=()=>{
    const { theme }=useContext(toggleTheme);
    
    return(
        <div>
            <header>
            "Coffee shop" {theme}
            </header>
            <Toggle />

        </div>
    )
}

export default Header;