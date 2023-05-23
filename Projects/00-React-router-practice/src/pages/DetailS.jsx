import React from 'react'
import { OnlyDetails } from '../components/OnlyDetails'
import { useParams } from 'react-router-dom'
import { useGetDetails } from '../hooks/useGetDetails'

export function DetailS() {

    const { id } = useParams()
    const { details, loading } = useGetDetails({ id })

    return (
        <main>
            {
                loading ? 
                <p>Cargando...</p> : 
                details != undefined && <OnlyDetails item={details} />
            }
        </main>
    )
}
