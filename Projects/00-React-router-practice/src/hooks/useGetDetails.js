import { useState, useEffect } from "react"
import { getDetails } from '../service/FetchDetails.js'

export function useGetDetails({ id }) {
    const [details, setDetails] = useState()
    const [loading, setLoading] = useState(false)

    const llamarDetails = () => {
        setLoading(true)
        getDetails(id).then(newDetails => {
            // console.log(newDetails)
            setDetails(newDetails)
            setLoading(false)
        })

    }

    useEffect(llamarDetails, [])

    return {details, loading}
}