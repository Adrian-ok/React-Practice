import React, { useEffect, useState } from 'react'
import { Solicitudes } from '../components/SoliPendigs.jsx'
import { useGetState } from '../hooks/useGetState.js'

export function FindState() {

  const { solicitudes, setSelect, loading } = useGetState()

  const pickOption = async (event) => {
    localStorage.removeItem('solicitudes')
    const option = event.target.value
    setSelect(option)
  }

  return (
    <main className='max-w-screen-lg mx-auto mt-12'>
      <div className='flex justify-center my-10'>
        <select className='p-3 rounded' onChange={pickOption}>
          <option value="0">Seleccione el estado</option>
          <option value="1"> ✅ Terminado</option>
          <option value="2"> 🕑 En proceso</option>
          <option value="3"> 🚚 Esperando recursos</option>
        </select>
      </div>

      {
        loading ?
          <p className='text-white text-4xl text-center'>Cargando...</p> :
          solicitudes != undefined && <Solicitudes items={solicitudes} />
      }
    </main>
  )
}
