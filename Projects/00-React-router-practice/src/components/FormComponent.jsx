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
                <form className='flex flex-col justify-center items-center gap-2' onSubmit={sendQuery}>
                    <h4>Nueva Solicitud</h4>

                    <select onChange={pickOption} className='rounded-md p-1' defaultValue='default' name='sector'>
                        <option value='default'>Selecione Sector</option>
                        {SECTORES.map(item => {
                            return (
                                <option key={item.value} value={item.sector}>{item.sector}</option>
                            )
                        })}
                    </select>

                    <select className='rounded-md p-1' defaultValue='default' name='maquina'>
                        <option value='default'>Selecione Maquina</option>
                        {machine.map(item => {
                            return (
                                <option key={item.id} value={item.nombre}>{item.nombre}</option>
                            )
                        })}
                    </select>

                    <textarea type="text" placeholder='Detalle' maxLength='250' name='detalle' required />

                    <div>
                        <input type="radio" name='opt' value='Normal' checked={checked === 'Normal'} onChange={changeChecked} />
                        <label>Normal</label>
                        <input type="radio" name='opt' value='Urgente' checked={checked === 'Urgente'} onChange={changeChecked} />
                        <label>Urgente</label>
                        <input type="radio" name='opt' value='Critico' checked={checked === 'Critico'} onChange={changeChecked} />
                        <label>Critico</label>
                    </div>

                    <button className='bg-blue-400 rounded-sm p-1'>Enviar</button>

                </form>
            }
        </>
    )
}
