import React from "react";

const ListItems = (props) => {
    return (
        <>
            <li>{props.text}</li>
            <button onClick={()=>{
                props.deleted(props.id)
            }}>DELETE</button>
        </>    
        
    )
}

export default ListItems;

