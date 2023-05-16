import React from 'react'
import { useGetPendigns } from '../hooks/useGetPendings'
import { Solicitudes } from '../components/SoliPendigs.jsx'

export function Pendientes() {

  const { pendings, refreshPendings } = useGetPendigns()

  return (
    <main>
      <Solicitudes items={pendings}/>
    </main>
  )
}
