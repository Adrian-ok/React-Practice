import React from 'react'
import logo from '/logo_cofra.png'
import { FormAssing } from './FormAssing'
import { BtnDownload } from './BtnDownload'

export function CardDetails({ item }) {

    const grado = () => {
        if (item[0].grado === 'Critico') {
            return <p className='text-red-600 ml-2 font-bold'>Critico</p>
        }
        else if (item[0].grado === 'Urgente') {
            return <p className='text-yellow-600 ml-2 font-bold'>Urgente</p>
        }
        else {
            return <p className='ml-2 font-bold'>Normal</p>
        }
    }

    return (
        <section className="w-[600px] mx-auto mt-12">
            <article className="bg-white rounded-md shadow-lg p-3">
                <p className="text-center text-xs mb-2 text-gray-500">Solicitud nro: {item[0].id}</p>

                <div className="border-b-2 border-green-800 flex justify-between items-center mx-6 pb-2 ">
                    <img src={logo} className="w-18 h-12" />
                    <p className='font-bold '>{new Date(item[0].fecha).toLocaleDateString(undefined, { timeZone: 'UTC' })}</p>
                </div>

                <div className='border-b-2 border-green-800 mx-6 mt-2 pb-2'>
                    <p className='font-semibold'>Sector: {item[0].sector}</p>
                    <p className='font-semibold'>Equipo: {item[0].equipo}</p>
                    <div className='flex'>
                        <p className='font-semibold'>Necesidad:</p>
                        {grado()}
                    </div>
                </div>

                <div className='border-b-2 border-green-800 mx-6 mt-2 pb-2'>
                    <p>Problema: {item[0].detalle}</p>
                </div>

                <div className='mx-6 mt-2 pb-2'>
                    <p>Usuario Generador: {item[0].nombre}</p>
                </div>
                
                {item[0].codimg === '0' ? <></> :
                    <div className='flex justify-center'>
                        <BtnDownload codimg={item[0].codimg} />
                    </div>
                }

            </article>

            <FormAssing id={item[0].id}/>
        </section>
    )
}

