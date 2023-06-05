import { useState } from 'react'
import { FormatDate } from '../logic/data.js'


export const usePostData = () => {

    const [loading, setLoading] = useState(false)

    const postData = async (fields) => {

        setLoading(true)

        const { sector, maquina, detalle, opt } = fields
        const fecha = FormatDate(new Date())

        const formData = new FormData()

        formData.append('nro_legajo', '700')
        formData.append('ape_nom', 'web')
        formData.append('sector', sector)
        formData.append('equipo', maquina)
        formData.append('det_solicitud', detalle)
        formData.append('cod_imagen', '0000')
        formData.append('necesidad', opt)
        formData.append('fecha_sol', fecha)
        formData.append('estado', '0')
        formData.append('nom_operario', '')

        fetch('https://www.cofra.com.ar/sistemas/api-php/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                // Procesar la respuesta de la API
                window.alert('Solicitud enviada con exito')
                setLoading(false)
            })
            .catch(error => {
                // Manejar el error
                window.alert(error.message)
                setLoading(false)
            });
    }
    return { postData, loading }
}