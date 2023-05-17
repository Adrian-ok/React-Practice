import React from 'react'
import { useParams } from 'react-router-dom'

export function PendingDetails() {

    // const {legajo, nombre, sector, equipo, detalle, grado, fecha, estado, operario } = useParams()
    const { id } = useParams()

    console.log(id)

    return (
        <main>

        </main>
    )
}
