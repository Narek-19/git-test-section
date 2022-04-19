import React,{useState} from "react";

export const Footer =()=>{
    const [footer, setFooter] = useState();
    const fotter = "Footer";
    if(footer !== null){
        console.log("Footer exicts")
    } else  {
        console.log("no footer");
    }

    if(fotter){
        console.log("a");

    }else {
        console.log('No footer');
    }
    return (
        <div className = "Footer">
            <h2>Footer</h2>
            <h1>Footer</h1>
        </div>
    )
}