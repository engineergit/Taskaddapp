import React,{createContext,useState} from 'react';
export const TaskListContext = createContext();
export const TaskListContextProvider =props=>{
        const[tasks, setTasks] =useState([
            {task:"read the book1 ",id:1},
            {task:"read the book2 ",id:2},
            {task:"read the book3 ",id:3}
        ]);
    return (<TaskListContext.Provider value={{tasks}}>
        {props.children}
    </TaskListContext.Provider>
    );
}

export default TaskListContextProvider;