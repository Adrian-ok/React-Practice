import { createContext, useEffect, useReducer } from 'react'
import { taskReduce } from '../reduce/TaskReduce'

export const TaskContext = createContext()

// const initialState = [
//     {id: '179b026d-0a34-45f1-8d40-90aeccc06a63', name: 'COOCKING PIZZA', detail: 'BUY: FLOUR, GRAVY AND CHEESE', complete: false},
//     {id: '179b026d-0a34-45f1-8d40-90aeccc06a73', name: 'SHOWER THE DOG', detail: 'RQUIRE: SOAP, WATER AND DOG', complete: false}
// ]

const initialState = []

export function TaskProvider({ children }) {

    const [state, dispatch] = useReducer(taskReduce, [], () => {
        //obtener task del storage
        const storedTask = localStorage.getItem('tasks')
        //consulto si hay algo guardado lo seteo sino seteo el initialState
        return storedTask ? JSON.parse(storedTask) : initialState
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state))
    }, [state])

    const addTask = task => {
        dispatch({
            type: 'ADD_TASK_LIST',
            payload: task
        })
    }

    const completeTask = task => {
        dispatch({
            type: 'COMPLETE_TASK',
            payload: task
        })
    }

    const deleteTask = task => {
        dispatch({
            type: 'DELETE_TASK',
            payload: task
        })
    }

    const updateTask = task => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: task
        })
    }

    return(
        <TaskContext.Provider value={{
            task: state,
            addTask,
            completeTask,
            deleteTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}