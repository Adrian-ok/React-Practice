import React from 'react'
import { Link } from 'react-router-dom'

export function Solicitudes({ items }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {items.map((item) => {
                return (
                    <div key={item.id} className='bg-white rounded-md shadow-lg p-4 flex flex-col justify-between'>
                        <div className='flex justify-between'>
                            <h2 className='text-xl font-semibold'>{item.equipo}</h2>
                            <p className='text-gray-500 text-sm mt-2'>{new Date(item.fecha).toLocaleDateString(undefined,{timeZone: 'UTC'})}</p>
                        </div>
                        <h3 className='text-gray-500 text-sm mt-1'>{item.sector}</h3>
                        <p className='text-gray-700 mt-2'>Contenido del párrafo {item.detalle}</p>
                        <Link to={`/Pendientes/${item.id}`} className='text-blue-500 text-sm hover:text-blue-900 mt-auto text-right '>Leer más</Link>
                    </div>
                );
            })}
        </div>
    );
}
