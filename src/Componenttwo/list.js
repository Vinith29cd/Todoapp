import React from "react";
import Todolist from "../Components/todolist";
import "./list.css"

const List = ({items , removelist,checkbox}) => {
    console.log(items)
    const checkboxtick = () =>{
        if(items.done)
           return null;
        checkbox(items.id)
    }
    return <div>
        <input className="checkbox" type ='checkbox' checked={items.done} onChange={()=>checkboxtick()}></input>        
        <span className="title" style={items.done?{textDecoration:"line-through"}:null}>{items.title}</span>
        <span className="close" onClick={()=>removelist(items.id)}>X</span>
        <hr/>
    </div>
   
}

export default List; 