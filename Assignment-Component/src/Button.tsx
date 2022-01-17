import React from "react";
 
function Button(props:{value:string,handleClick:()=>void}){
    return (
        <button onClick={props.handleClick}>{props.value}</button>
    );
}
export default Button;