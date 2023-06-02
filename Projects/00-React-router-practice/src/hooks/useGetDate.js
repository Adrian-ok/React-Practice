import { useState, useEffect } from "react";
import { getDateDetails } from "../service/FetchDate";

export function useGetDate() {
    
    const [pick, setPick] = useState(null)
    const [msjempty, setMsjempty] = useState(false)
    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(false)

    const findDate = () => {
        
        setLoading(true)
        setMsjempty(false)

        const storeDates = localStorage.getItem('fechas')
        const storePick = localStorage.getItem('date')

        if (storeDates && storePick) {
            setDates(JSON.parse(storeDates))
            setPick(JSON.parse(storePick))
            setLoading(false)
        }
        else {
            if (pick !== null) {

                getDateDetails(pick)
                    .then(newState => {
                        setDates(newState)
                        setLoading(false)
                        localStorage.setItem('fechas', JSON.stringify(newState))
                        localStorage.setItem('date', JSON.stringify(pick) )
                        if(newState.length === 0) {setMsjempty(true)}
                    })
                    .catch(error => {
                        setLoading(false)
                        setMsjempty(false)
                    });
            }
            else {
                setLoading(false)
            }
        }
    }

    useEffect(findDate, [pick])

    return {dates, pick, msjempty, setPick, loading}
}