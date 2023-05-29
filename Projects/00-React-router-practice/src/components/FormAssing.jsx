import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { OPERARIOS, ESTADO } from '../logic/data'


export function FormAssing({ id }) {

    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const fields = Object.fromEntries(new window.FormData(event.target))

        if (fields.operarioslc === 'default' || fields.sectorslc === 'default') {
            setError(true)
            return
        }
        else {
            setError(false)
            const URL_UPDATE_PENDINGS = `https://cofra.com.ar/sistemas/api-php/controls.php?nom_operario=${fields.operarioslc}&estado=${fields.sectorslc}&id=${id}`

            console.log(URL_UPDATE_PENDINGS)
            let requestOptions = {
                method: 'PUT',
                redirect: 'follow'
            };

            fetch(URL_UPDATE_PENDINGS, requestOptions)
                .then(response => response.text())
                .then(result => navigate(-1))
                .catch(error => console.log('error', error));
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center mt-8'
        >
            <div className="flex mb-4">
                <select name='operarioslc' defaultValue='default' className="w-52 mr-2 bg-gray-200 rounded-md p-2 border border-gray-300">
                    <option value='default'>Selecione Operario</option>
                    {OPERARIOS.map(item => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        )
                    })}
                </select>
                <select name='sectorslc' defaultValue='default' className="w-52 mr-2 bg-gray-200 rounded-md p-2 border border-gray-300">
                    <option value='default'>Selecione Estado</option>
                    {ESTADO.map(item => {
                        return (
                            <option key={item.estado} value={item.value}>{item.estado}</option>
                        )
                    })}
                </select>
            </div>

            {error && <p className="text-red-800 font-semibold">* Asegurese de seleccionar tanto Operario como Sector *</p>}

            <button
                type='submit'
                className='bg-blue-700 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-300 '
            >
                Guardar
            </button>
        </form>
    )
}
