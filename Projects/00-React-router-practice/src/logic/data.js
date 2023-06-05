export const OPERARIOS = [
    'Operario 1',
    'Operario 2',
    'Operario 3',
    'Operario 4',
    'Operario 5'
]

export const ESTADO = [
    {value: '1', estado: 'Terminado'},
    {value: '2', estado: 'En proceso'},
    {value: '3', estado: 'Esperando Recursos'},
]

202

export const SECTORES = [
    { value: 1, sector: 'Administracion central' },
    { value: 2, sector: 'Administracion produccion primaria' },
    { value: 3, sector: 'Cabaña 25 de mayo' },
    { value: 4, sector: 'Cabaña picada belgrano' },
    { value: 5, sector: 'Cabaña san vicente' },
    { value: 6, sector: 'Caldera' },
    { value: 7, sector: 'Carniceria' },
    { value: 8, sector: 'Cocina' },
    { value: 9, sector: 'Comercializacion' },
    { value: 10, sector: 'Control de calidad' },
    { value: 11, sector: 'Corrales' },
    { value: 12, sector: 'Deposito general industria' },
    { value: 13, sector: 'Desposte nocturno' },
    { value: 14, sector: 'Digestor' },
    { value: 15, sector: 'Empaque' },
    { value: 16, sector: 'Expedicion' },
    { value: 17, sector: 'Fabrica alem' },
    { value: 18, sector: 'Fabrica san vicente' },
    { value: 19, sector: 'Faena/cuarteo' },
    { value: 20, sector: 'Faena/desposte' },
    { value: 21, sector: 'Industria' },
    { value: 22, sector: 'Lavadero de ropa' },
    { value: 23, sector: 'Mantenimiento' },
    { value: 24, sector: 'Mantenimiento cabañas' },
    { value: 25, sector: 'Obras' },
    { value: 26, sector: 'Orden y limpieza' },
    { value: 27, sector: 'Porteria' },
    { value: 28, sector: 'Preventistas' },
    { value: 29, sector: 'Repositores' },
    { value: 30, sector: 'S.I.V' },
    { value: 31, sector: 'Tarctoristas' },
    { value: 32, sector: 'Tipificador/control' },
    { value: 33, sector: 'Transporte prod.prim.' },
    { value: 34, sector: 'Triperia' },
    { value: 35, sector: 'Triperia/tunel diurno' },
    { value: 36, sector: 'Visceras verdes/desposte' },
    { value: 37, sector: 'Visceras verdes/tunel diurno' }
]

//FECHA FORMATEADA
export function FormatDate(date) {
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return formatted_date;
}

