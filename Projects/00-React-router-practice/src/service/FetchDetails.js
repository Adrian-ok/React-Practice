
export async function getDetails(id) {
    const URL_DETAILS = `http://cofra.com.ar/sistemas/api-php/?id=${id}`

    const resultado = await fetch(URL_DETAILS)
    const data = await resultado.json()

    return data?.map(item => ({
        id : item.id_solicitud,
        legajo : item.nro_legajo,
        nombre : item.ape_nom,
        sector : item.sector,
        equipo : item.equipo,
        detalle : item.det_solicitud,
        codimg : item.cod_imagen,
        grado : item.necesidad,
        fecha : item.fecha_sol,
        estado : item.estado,
        operario : item.nom_operario,
        modificado : item.ultima_modi
    }))
}