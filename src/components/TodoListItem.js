
const TodoListItem = ({ task, toggle }) => {

    

    return (
        <li id={task.id} className={task.complete ? "strike" : ""} 
        onClick={(e) => {
            toggle(e.target.id)
            } 
        }
        >{task.task}</li>
    )
}

export default TodoListItem;