export const estado = (estado) => {
    if (estado === '1') {
        return <p className='text-green-600 ml-2 font-bold'>Terminado</p>
    }
    else if (estado === '2') {
        return <p className='text-yellow-600 ml-2 font-bold'>En Proceso</p>
    }
    else {
        return <p className='ml-2 font-bold'>Esperando Recursos</p>
    }
}

export const grado = (grado) => {
    if (grado === 'Critico') {
        return <p className='text-red-600 ml-2 font-bold'>Critico</p>
    }
    else if (grado === 'Urgente') {
        return <p className='text-yellow-600 ml-2 font-bold'>Urgente</p>
    }
    else {
        return <p className='ml-2 font-bold'>Normal</p>
    }
}