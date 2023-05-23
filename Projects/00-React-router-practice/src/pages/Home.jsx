import React from 'react'
import { BtnMenu } from '../components/BtnMenu'
import calendar from '/calendario.png'
import state from '/progress.png'
import pending from '/pending.png'

export function HomeMain() {
  return (
    <div className="flex items-center justify-center mt-12">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <BtnMenu title={'Pendientes'} logo={pending} link={'/pendientes'} />
        <BtnMenu title={'Por Estado'} logo={state} link={'/estado'} />
        <BtnMenu title={'Por Fecha'} logo={calendar} link={'/fecha'} />
      </main>
    </div>
  )
}
