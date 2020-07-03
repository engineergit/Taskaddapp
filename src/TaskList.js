import React,{useContext} from 'react'
import TaskListContext from './Context/TaskListContext';
import Task from './Components/Task';
const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    console.log(tasks)
    return (
        <div>
            <ul className="list">
            {/* {tasks.map((task)=>{
                return <Task />
            })} */}
            </ul>
        </div>
    )
}

export default TaskList
