import TodoListItem from "./TodoListItem"

const TodoList = ({ tasks }) => {
    return (
        <ul>
        {tasks?.map(task => {
            console.log(task);
           return <TodoListItem task={task} />
        })
        }
    </ul>
    )
}

export default TodoList;