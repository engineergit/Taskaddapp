import React from 'react'

export const Task = () => {
    return (
        <div>
            <li className= "list-item">
                <span>Task title</span>
                <div>
                    <button className="btn-delete task-btn">
                        <li className="fas fa-trash-alt"></li>
                    </button>
                    <button className="btn-edit task-btn">
                        <li class   Name="fas fa-pen"></li>
                    </button>
                </div>
            </li>
        </div>
    )
}
export default Task;