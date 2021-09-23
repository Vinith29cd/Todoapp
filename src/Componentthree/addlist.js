import React,{useState,useRef} from "react";



const Addlist=({add})=>{
const [title,setTitle]=useState() ;
const ref = useRef();  
const onSub=(e)=>{
    
      

    e.preventDefault()
    const newadd =  {id:Math.random(), title:title, done:false}
    add(newadd)    
    console.log(newadd)
    ref.current.value = "";
    
}

    return <div>
        <form onSubmit={onSub}>
            <input type='text'  onChange = {(e)=>setTitle(e.target.value) } ref={ref} required></input>
            <input type='submit'></input>
            
        </form>
        
    </div>
}

export default Addlist;