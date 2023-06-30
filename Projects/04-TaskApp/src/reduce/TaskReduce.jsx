export function taskReduce(state, action) {
    switch (action.type) {
        case 'ADD_TASK_LIST': {
            const newState = [
                ...state,
                { ...action.payload }
            ]
            return newState
        }
        
        case 'COMPLETE_TASK': {

            const { id } = action.payload

            //Guarda la posicion donde se encuentra el item correspondiente a ese id
            const taskList = state.findIndex(item => item.id === id)

            if (taskList >= 0) {

                const newState = structuredClone(state)

                newState[taskList].complete === true ? newState[taskList].complete = false : newState[taskList].complete = true

                return newState
            }
        }

        case 'DELETE_TASK': {

            const { id } = action.payload

            const newState = state.filter(item => item.id != id)

            return newState
        }

        case 'UPDATE_TASK': {

            const updatedTask = action.payload;

            //Recorro todas las tareas y cuando coincida el id modifico la propiedad completa 
            //que es lo que no trae el objeto action.payload
            const updatedTasks = state.map((task) => {
              if (task.id === updatedTask.id) {
                updatedTask.complete = task.complete;
                return updatedTask;
              }
              return task;
            });

            return updatedTasks
        }

        default: return state
    }
}