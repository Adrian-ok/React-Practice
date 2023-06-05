import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetails } from '../hooks/useGetDetails'
import { CardDetails } from '../components/CardDetails'

export function PendingDetails() {

    // const {legajo, nombre, sector, equipo, detalle, grado, fecha, estado, operario } = useParams()
    const { id } = useParams()
    const { details, loading } = useGetDetails({ id })

    // console.log(details)

    return (
        <main>
            
            {
                loading ? 
                <p className='text-white text-4xl text-center'>Cargando...</p> : 
                details != undefined && <CardDetails item={details} />
            }
            
        </main>
    )
}
