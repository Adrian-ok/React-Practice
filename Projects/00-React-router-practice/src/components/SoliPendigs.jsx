import React from 'react'
import { Link } from 'react-router-dom'

export function Solicitudes({ items }) {
    return (
        <div className="p-6">
            {items.map(item => {
                return (
                    <div class="max-w-md mb-3 mx-auto bg-white shadow-md rounded-md overflow-hidden">
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-2">{item.equipo}</h2>
                            <p class="text-gray-700">Lorem ipsum dolor sit amet, {item.detalle}</p>
                        </div>
                        <div class="bg-gray-100 py-3 px-4 flex items-center justify-between">
                            <span class="text-gray-600">{item.fecha}</span>
                            <a href="#" class="text-blue-500 hover:text-blue-700">Ver más</a>
                            {/* <a href="#" class="text-blue-500 hover:text-blue-700">Leer más</a> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

