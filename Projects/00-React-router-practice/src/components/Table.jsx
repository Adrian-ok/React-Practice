import React from 'react'
import { Formato } from '../logic/data.js'

export function Table({ data, data2 }) {
    return (
        <div className="flex justify-center mt-10">
            <div className="flex">
                <div className="w-5/6 ml-10">
                    <table className="rounded-md divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="px-4 py-2 font-medium text-gray-900">DETALLE</th>
                                <th className="px-4 py-2 font-medium text-gray-900">SOLICITADO</th>
                                <th className="px-4 py-2 font-medium text-gray-900">OPERARIO</th>
                                <th className="px-4 py-2 font-medium text-gray-900">ESTADO</th>
                                <th className="px-4 py-2 font-medium text-gray-900">FINALIZADO</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td >{item.det_solicitud}</td>
                                        <td >{Formato(item.fecha_sol)}</td>
                                        <td>{item.nom_operario}</td>
                                        <td>{item.estado}</td>
                                        <td>{item.ultima_modi}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="w-5/6 ml-12">
                    <table className="rounded-md divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="px-4 py-2 font-medium text-gray-900">TAREA</th>
                                <th className="px-4 py-2 font-medium text-gray-900">DETALLE</th>
                                <th className="px-4 py-2 font-medium text-gray-900">OPERARIO</th>
                                <th className="px-4 py-2 font-medium text-gray-900">ESTADO</th>
                                <th className="px-4 py-2 font-medium text-gray-900">INICIADA</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data2.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td >{item.nombre_tarea}</td>
                                        <td >{item.detalle}</td>
                                        <td>{item.operario}</td>
                                        <td>{item.estado}</td>
                                        <td>{Formato(item.fecha_ini)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

