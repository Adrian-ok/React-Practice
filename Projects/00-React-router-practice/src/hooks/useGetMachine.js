import { useState, useEffect } from "react"
import { getMachine } from '../service/FetchMachine.js'

export const useGetMachine = () => {
    const [machine, setMachine] = useState([])
    const [sector, setSector] = useState()

    const callMachine = () => {
        getMachine(sector)
            .then(newMachine => {
                setMachine(newMachine)
            })
    }

    useEffect(callMachine, [sector])

    return { machine, setSector }
}