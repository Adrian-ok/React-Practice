import React from 'react'
import { Solicitudes } from '../components/SoliPendigs'
import { useGetDate } from '../hooks/useGetDate'

export function FindDate() {

    const { dates, pick, msjempty, setPick, loading } = useGetDate()

    const pickDate = (event) => {
        localStorage.removeItem('fechas')
        const option = event.target.value
        setPick(option)
    }

    return (
        <main className='max-w-screen-lg mx-auto mt-12'>
            <div className='flex justify-center my-10'>
                <input className='p-2 rounded-md w-48' type='date' onChange={pickDate} value={pick}/>
            </div>

            { 
                loading ? <p className='text-white text-4xl text-center'>Cargando...</p> : 
                (msjempty ? <p className='text-white text-2xl text-center'>No hay resultados</p> : <Solicitudes items={dates}/>)
            }

        </main>
    )
}
