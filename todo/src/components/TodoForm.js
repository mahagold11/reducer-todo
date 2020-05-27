import React from 'react'
import styled from 'styled-components';

const AddTask = styled.button`
margin: 2%;
color: green;
`
const ClearTasks = styled.button`
margin: 2%;
color: red;
`


const TodoForm = props => {

        return(
            <div>
              <div>
                <input type="text"
                value={props.taskInput}
                name="taskInput"
                onChange={props.inputChange}
                />
                <AddTask onClick={event=> {props.taskSubmit(event)}}>Add Task</AddTask>
                <ClearTasks onClick={event=> {props.clearCompleted(event)}}>Clear Completed Tasks</ClearTasks>
              </div>
            </div>

        )
}

export default TodoForm