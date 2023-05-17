import { useState, useEffect } from "react";
import { getSolicitudes } from '../service/FetchSolicitudes.js'

export function useGetPendigns() {
    const [pendings, setPendings] = useState([])
    const [loading, setLoading] = useState(false)

    const refreshPendings = () => {
        setLoading(true)
        getSolicitudes().then(newPendig => {
            setLoading(false)
            setPendings(newPendig)
        })
    }

    useEffect(refreshPendings, [])

    return { pendings, refreshPendings, loading }
}