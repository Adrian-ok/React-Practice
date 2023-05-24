import { useState, useEffect } from 'react'
import { getState } from '../service/FetchState.js'

export function useGetState() {
    const [select, setSelect] = useState(null)
    const [solicitudes, setSolicitudes] = useState([])
    const [loading, setLoading] = useState(false)
    // const [anterior, setAnterior] = useState(select)

    const llamarState = () => {

        setLoading(true)

        const storedSolicitudes = localStorage.getItem('solicitudes')
        

        if (storedSolicitudes) {
            setSolicitudes(JSON.parse(storedSolicitudes))
            setLoading(false)
        }
        else {
            if (select !== null) {

                getState(select)
                    .then(newState => {
                        setSolicitudes(newState);
                        setLoading(false);
                        localStorage.setItem('solicitudes', JSON.stringify(newState));
                    })
                    .catch(error => {
                        setLoading(false);
                    });
            }
            else {
                setLoading(false)
            }
        }
    }

    useEffect(llamarState, [select])

    return { solicitudes, setSelect, loading }
}