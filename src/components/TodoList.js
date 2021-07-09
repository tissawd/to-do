import TodoListItem from "./TodoListItem"
import { useState } from "react";


const TodoList = ({ tasks }) => {
    const [ taskList, setTaskList ] = useState(tasks);    
    
    
    return (
        <ul>
        {taskList.map(task => {
            console.log(task);
           return <TodoListItem task={task} />
        })
        }
    </ul>
    )
}

export default TodoList;