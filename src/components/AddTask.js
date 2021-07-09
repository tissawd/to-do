import { useState } from "react";


const AddTask = ({ addNewTask }) => {
    const [ userInput, setUserInput ] = useState('');

    function handleChange(input){
        setUserInput(input);
    }

    function handleSubmit(e){
        e.preventDefault();
        addNewTask(userInput);
        setUserInput('');
    }

    return (
        <form>
            <label htmlFor="taskDescription">New Task:</label>
                <input value={userInput} type="text" id="taskDescription" onChange={e => handleChange(e.currentTarget.value)} placeholder='Enter Task' ></input>
            <button type="submit" onClick={handleSubmit}>Add Task</button>
        </form>
    )

}

export default AddTask;