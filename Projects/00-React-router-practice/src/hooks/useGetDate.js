import { useState, useEffect } from "react";
import { getDateDetails } from "../service/FetchDate";

export function useGetDate() {
    
    const [pick, setPick] = useState()
    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(false)

    const findDate = () => {
        
        setLoading(true)

        const storeDates = localStorage.getItem('fechas')

        if (storeDates) {
            setDates(JSON.parse(storeDates))
            setLoading(false)
        }
        else {
            if (pick !== null) {

                getDateDetails(pick)
                    .then(newState => {
                        setDates(newState);
                        setLoading(false);
                        localStorage.setItem('fechas', JSON.stringify(newState));
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

    useEffect(findDate, [pick])

    return {dates, setPick, loading}
}