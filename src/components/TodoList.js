import TodoListItem from "./TodoListItem"
import { useState } from "react";


const TodoList = ({ tasks }) => {
    const [ taskList, setTaskList ] = useState(tasks);    
    
    function toggleCompleted(id){
        let mapped = taskList.map(task => {
            return task.id === parseInt(id) ? {...task, complete: !task.complete} : {...task} 
        });
        setTaskList(mapped);
    }

    return (
        <ul>
            {taskList.map(task => {
            return <TodoListItem task={task} toggle={toggleCompleted} />
                })
            }
        </ul>
    )
}

export default TodoList;