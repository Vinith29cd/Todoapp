import React,{useState} from 'react';
import Addlist from '../Componentthree/addlist';
import List from '../Componenttwo/list';
import './todolist.css'


const dolist =[
    
]
const Todolist = () =>{
    const [todos , setTodos] = useState(dolist)
    
    const addnew =  (newadd) => {
        const newlist=[...todos,newadd]
        setTodos(newlist)
    }
    const removeTodo=(id)=>{
        const newlist=todos.filter(todo=>todo.id!==id)
        setTodos(newlist)
    }
    const checkboxchange=(id)=>{
        const newlist=todos.map(todo=>{
            if(todo.id===id)
            return{...todo,done:!todo.done}
        return todo;
    })
    setTodos(newlist)
    }
    return <div className='todo'>          
        <h1 className='Head'>Todo List</h1>
        <Addlist add = {addnew}/>
        {todos.map((todo) => <List items={todo} removelist={removeTodo} checkbox={checkboxchange}/>)}    
             
    </div>
}

export default Todolist;