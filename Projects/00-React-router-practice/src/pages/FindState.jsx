import React, { useState } from 'react'
import { Solicitudes } from '../components/SoliPendigs.jsx'
import { CardDetails } from '../components/CardDetails'

export function FindState() {

  const [solicitudes, setSolicitudes] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const pickOption = async (event) => {
    const option = event.target.value
    const URL_STATE = `http://cofra.com.ar/sistemas/api-php/controls.php?estado=${option}`

    try {
      setLoading(true)
      const response = await fetch(URL_STATE)
      const data = await response.json()

      const dato = data?.map(item => ({
        id: item.id_solicitud,
        legajo: item.nro_legajo,
        nombre: item.ape_nom,
        sector: item.sector,
        equipo: item.equipo,
        detalle: item.det_solicitud,
        codimg: item.cod_imagen,
        grado: item.necesidad,
        fecha: item.fecha_sol,
        estado: item.estado,
        operario: item.nom_operario,
        modificado: item.ultima_modi
      }))

      setSolicitudes(dato)
      // console.log(dato)
      setLoading(false)
    }
    catch (error) {
      setError(true)
    }
  }


  return (
    <main>
      <div className='flex justify-center my-10'>
        <select className='p-3 rounded' onChange={pickOption}>
          <option value="0">Seleccione el estado</option>
          <option value="1"> ✅ Terminado</option>
          <option value="2"> 🕑 En proceso</option>
          <option value="3"> 🚚 Esperando recursos</option>
        </select>
      </div>

      {
        loading ?
          <p>Cargando...</p> :
          // console.log(solicitudes)
          solicitudes != undefined && <Solicitudes items={solicitudes} />
      }


    </main>
  )
}
