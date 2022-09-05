import React,{Fragment, useState, useRef, useEffect} from 'react';
import TodoList from './components/TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons' 

const KEY = "todoApp.todos"

export function App() {
    const [todos, setTodos] = useState([])

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos){
            setTodos(storedTodos);
        }
    },[])

    useEffect(() =>{
        localStorage.setItem(KEY, JSON.stringify(todos));
    },[todos]);

    const toggleTodo =(id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todoTaskRef.completed;
        setTodos(newTodos);
    }

    function random(){
        return Math.floor(Math.random() * 100)
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task==="") return;

        setTodos((prevTodos) => {
            console.log("ADD")
            return [...prevTodos, {id: random(), task, completed: false}];
        });

        todoTaskRef.current.value = null;
    }

    const handleClearAll = () => {
        const newTodos = todos.filter((todo)=>!todo.completed)
        setTodos(newTodos);
    }
    
    return (
        <>
        <h2 className='header'>TODOS</h2>
        <div className='container'>  
        <div className='text-input'>
            <input  ref ={todoTaskRef} type="text" placeholder="New task"/>
            <button  className="logo" onClick={handleTodoAdd}> <FontAwesomeIcon icon={faPlus}/> </button>
            <button   className="logo" onClick={handleClearAll}> <FontAwesomeIcon icon={faTrashCan}/> </button>
        </div>     
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>

        </div>
        </>
        
    )
}

