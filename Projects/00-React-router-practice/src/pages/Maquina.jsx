import React from 'react'
import { SECTORES } from '../logic/data.js'
import { useGetMachine } from '../hooks/useGetMachine.js'
import { useInforme } from '../hooks/useInforme.js'
import { Table } from '../components/Table.jsx'

export function Maquina() {

    const { machine, setSector } = useGetMachine()
    const { solicitudes, tareas, setPick } = useInforme()

    return (
        <>
            <div className="max-w-md mx-auto bg-gray-300 p-6 rounded-xl mt-12">
                <div className="flex flex-col justify-center items-center gap-2">
                    <select onChange={(event) => setSector(event.target.value)} className="rounded-md p-1 h-10" defaultValue="default" name="sector">
                        <option value="default">Selecciona un Sector</option>
                        {SECTORES.map(item => {
                            return (
                                <option key={item.value} value={item.sector}>{item.sector}</option>
                            )
                        })}
                    </select>

                    <select onChange={(event) => setPick(event.target.value)} className="rounded-md p-1 h-10" defaultValue="default" name="maquina">
                        <option value="default">Selecciona una Máquina</option>
                        {machine.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>{item.nombre}</option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <Table  data={solicitudes} data2={tareas}/>
        
        </>
    )
}






