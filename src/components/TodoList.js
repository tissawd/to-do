import { TodoListItem, AddTask } from "./"
import { useState } from "react";


const TodoList = ({ tasks }) => {
    const [ taskList, setTaskList ] = useState(tasks);
    const [ nextId, setNextId ] = useState(taskList.length + 1)    
    
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

    function addNewTask(newTask){
        setTaskList([...taskList, {id: nextId, task: newTask, complete: false}]);
        setNextId(nextId + 1);
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
            <AddTask addNewTask={addNewTask} />
        </div>
    )
}

export default TodoList;