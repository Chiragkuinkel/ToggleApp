import React from "react";
import Offers from "./part2";
import Header from "./header";
const Description=()=>{
    return(
        <div className="Main">
            <Header />
            <img src="Icon.jpg" alt="logo"></img>
            <h1>"Have a beautiful morning with us"</h1>
            <Offers />
        </div>
    )
}

export default Description;