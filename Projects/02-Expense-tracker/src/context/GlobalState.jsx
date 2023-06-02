import { createContext, useEffect, useReducer } from 'react'
import { reduce } from '../reduce/AppReduce'

// Inicializacion del stado
const initialState = {
    transactions : [],
}

// Crear el contexto 
export const Context = createContext()

// Funcion proveedora del contexto 
export const GlobalProvider = ({ children }) => {

    const [state,  dispatch] = useReducer(reduce, initialState, () => {
        const localTransaction = window.localStorage.getItem('transactions')
        return localTransaction ? JSON.parse(localTransaction) : initialState
    })
    
    useEffect(() => {
      window.localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])
    

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <Context.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction   
        }}>
            {children}
        </Context.Provider>
    )
}