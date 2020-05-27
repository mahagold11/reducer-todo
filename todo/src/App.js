import React,{useState,useReducer} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'
import {userList, reducer} from './reducer/reducer'
import styled from 'styled-components';


function App () {
  const [state, dispatch] = useReducer(reducer, userList);
  const [taskInput, setTaskInput] = useState('')

  const inputChange = event =>{
    event.preventDefault();
    setTaskInput(event.target.value)
}

  const taskSubmit = event =>{
    event.preventDefault();
    dispatch({type:"new_task", payload:taskInput})
}   

  const toggleItem = item => {
    dispatch({type:"toggled", payload:item})
  }

const clearCompleted = event =>{
    event.preventDefault();
    dispatch({type:"clear_done"})
}
    return (
      <div>
      <div className="App">
       <div className="header">
         <h1>Your To Do App</h1>
         <TodoForm  
         taskSubmit={taskSubmit}
         clearCompleted={clearCompleted}
         inputChange={inputChange}
         />
         </div>
         <TodoList 
         info={state}
         toggleItem={toggleItem}
         />
          </div>
          </div>
    )

    }

export default App;