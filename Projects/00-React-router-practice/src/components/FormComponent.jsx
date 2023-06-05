import React, { useState } from 'react'
import { SECTORES } from '../logic/data.js'
import { useGetMachine } from '../hooks/useGetMachine.js'
import { usePostData } from '../hooks/usePostDate.js'

export function FormComponent() {

    const [checked, setChecked] = useState('Normal')
    const { machine, setSector } = useGetMachine()
    const { postData, loading } = usePostData()

    const pickOption = (event) => {
        const pick = event.target.value
        setSector(pick)
    }

    const changeChecked = (event) => {
        setChecked(event.target.value)
    }

    const sendQuery = (event) => {
        event.preventDefault()

        const fields = Object.fromEntries(new window.FormData(event.target))

        postData(fields)
    }

    return (
        <>
            {loading ? <p className='text-white text-4xl text-center'>Cargando...</p> :
                <div className="max-w-md mx-auto bg-gray-300 p-6 rounded-xl mt-12">
                    <form className="flex flex-col justify-center items-center gap-2" onSubmit={sendQuery}>
                        <h4 className="text-center font-bold">Nueva Solicitud</h4>

                        <select
                            onChange={pickOption}
                            className="w-full rounded-md p-1 h-10"
                            defaultValue="default"
                            name="sector"
                        >
                            <option value="default">Selecciona un Sector</option>
                            {SECTORES.map((item) => {
                                return (
                                    <option key={item.value} value={item.sector}>
                                        {item.sector}
                                    </option>
                                );
                            })}
                        </select>

                        <select
                            className="w-full rounded-md p-1 h-10"
                            defaultValue="default"
                            name="maquina"
                        >
                            <option value="default">Selecciona una Máquina</option>
                            {machine.map((item) => {
                                return (
                                    <option key={item.id} value={item.nombre}>
                                        {item.nombre}
                                    </option>
                                );
                            })}
                        </select>

                        <textarea
                            type="text"
                            placeholder="Detalle"
                            maxLength="250"
                            name="detalle"
                            required
                            className="w-full rounded-md p-1"
                        />

                        <div className="flex flex-col">
                            <label>
                                <input
                                    type="radio"
                                    name="opt"
                                    value="Normal"
                                    checked={checked === "Normal"}
                                    onChange={changeChecked}
                                />
                                Normal
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="opt"
                                    value="Urgente"
                                    checked={checked === "Urgente"}
                                    onChange={changeChecked}
                                />
                                Urgente
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="opt"
                                    value="Critico"
                                    checked={checked === "Critico"}
                                    onChange={changeChecked}
                                />
                                Crítico
                            </label>
                        </div>

                        <button className="w-full bg-blue-400 rounded-sm p-1">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}
