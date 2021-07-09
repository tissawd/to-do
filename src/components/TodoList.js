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

    function clearCompleted(){
        let remaining = taskList.filter(task => {
            return !task.complete
        })
        setTaskList(remaining);
    }

    return (
        <div className="list-container">
            <ul>
                {taskList.map(task => {
                return <TodoListItem task={task} toggle={toggleCompleted} key={task.id} />
                    })
                }
            </ul>
            <button onClick={() => clearCompleted()}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;