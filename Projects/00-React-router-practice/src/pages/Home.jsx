import React, { useEffect } from 'react'
import { BtnMenu } from '../components/BtnMenu'
import calendar from '/calendario.png'
import state from '/progress.png'
import pending from '/pending.png'
import add from '/expediente.png'
import maquina from '/maquina.png'

export function HomeMain() {

  useEffect(() => {
    localStorage.removeItem('solicitudes')
    localStorage.removeItem('fechas')
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-white text-2xl font-bold mb-4">Ordenes</h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <BtnMenu title={'Pendientes'} logo={pending} link={'/pendientes'} />
        <BtnMenu title={'Por Estado'} logo={state} link={'/estado'} />
        <BtnMenu title={'Por Fecha'} logo={calendar} link={'/fecha'} />
        <BtnMenu title={'Nueva Solicitud'} logo={add} link={'/nueva'} />
        <BtnMenu title={'Consultar Maquina'} logo={maquina} link={'/maquina'} />
      </main>
    </div>
  )
}
