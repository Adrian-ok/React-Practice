import { useContext } from "react"
import { Context } from "../context/GlobalState"

// Usar el contexto
export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}