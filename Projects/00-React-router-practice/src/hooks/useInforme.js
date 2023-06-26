import { useEffect, useState } from "react";

export function useInforme() {

    const [solicitudes, setSolicitudes] = useState([])
    const [tareas, setTareas] = useState([])
    const [loading, setLoading] = useState(false)
    const [pick, setPick] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            const URL_SOLI = `https://cofra.com.ar/sistemas/api-php/tareas.php?soliId=${pick}`
            const URL_TASK = `https://cofra.com.ar/sistemas/api-php/tareas.php?taskId=${pick}`
            setLoading(true)
            try {
                console.log(URL_SOLI)
                const response1 = await fetch(URL_SOLI);
                const data1 = await response1.json();
                setSolicitudes(data1);

                console.log(URL_TASK)
                const response2 = await fetch(URL_TASK);
                const data2 = await response2.json();
                setTareas(data2);

                setLoading(false)
            } catch (error) {
                console.error('Error al realizar la consulta:', error);
                setLoading(false)
            }
        };

        fetchData();
    }, [pick]);

    return { solicitudes, tareas, loading, setPick }

}