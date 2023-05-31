import { toggleTheme } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
const Toggle=()=>{
    const {theme,setTheme} = useContext(toggleTheme);
    const handleToggleChange=()=>{
        setTheme(theme ==='light' ?'dark' :'light');
        
    };
    useEffect(
        ()=>{
            document.body.className = theme;
        }
    );
    return(
        <div>
            <button onClick={handleToggleChange}>"Toggle Theme"</button>
        </div>
    );
}

export default Toggle;