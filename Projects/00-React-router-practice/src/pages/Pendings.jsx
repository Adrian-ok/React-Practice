import React from 'react'
import { useGetPendigns } from '../hooks/useGetPendings'
import { Solicitudes } from '../components/SoliPendigs.jsx'

export function Pendientes() {

  const { pendings, refreshPendings, loading } = useGetPendigns()

  const handleRefresh = () => {
    refreshPendings()
  }

  return (
    <main className='max-w-screen-lg mx-auto mt-12'>

      <button className="bg-yellow-500 rounded-sm mb-4 p-1" onClick={handleRefresh}>Actualizar</button>

      {loading ? <p className='text-white text-4xl text-center'>Cargando...</p> : <Solicitudes items={pendings} />}
      
    </main>
  )
}
