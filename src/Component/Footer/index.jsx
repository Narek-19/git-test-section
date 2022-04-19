import React,{useState} from "react";

export const Footer =()=>{
    const [footer, setFooter] = useState();
    if(footer !== null){
        console.log("Footer exicts")
    } else  {
        console.log("no footer");
    }
    return (
        <div className = "Footer">
            <h2>Footer</h2>
        </div>
    )
}