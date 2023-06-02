export function reduce (state, action) {
    switch (action.type) {
        case 'ADD_TRANSACTION': {
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        }
        case 'DELETE_TRANSACTION':{
            return {
                ...state,
                transactions: state.transactions.filter((trasaction) => 
                    trasaction.id !== action.payload
                )
            }
        }
        default: 
            return state
    }
}


// case 'DELETE_TRANSACTION':{
//     if(state.transactions.length === 0) {
//         return state
//     }
//     else{
//         return {
//             ...state,
//             transactions: state.transactions.slice(0, state.transactions.length - 1)
//         }
//     }
// }