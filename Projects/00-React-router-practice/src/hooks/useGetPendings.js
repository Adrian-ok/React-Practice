import { useState, useEffect } from "react";
import { getSolicitudes } from '../service/FetchSolicitudes.js'

export function useGetPendigns() {
    const [pendings, setPendings] = useState([])

    const refreshPendings = () => {
        getSolicitudes().then(newPendig => setPendings(newPendig))
    }

    useEffect(refreshPendings, [])

    return { pendings, refreshPendings }
}