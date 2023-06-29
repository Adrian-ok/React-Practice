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
            
            if(taskList >= 0){

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
    }
}