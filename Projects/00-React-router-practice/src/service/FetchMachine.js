export async function getMachine(sector) {
    const URL_MACHINE = `https://cofra.com.ar/sistemas/api-php/controls.php?sector=${sector}`

    const resultado = await fetch(URL_MACHINE)
    const data = await resultado.json()

    return data?.map(item => ({
        id : item.id_maquina,
        nombre : item.nombre
    }))
}