import { useEffect, useState } from "react"
import { getCharacter } from '../service/FetchCharacter'

export function useGetCharacter() {
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState(1)

    const callCharacter = () => {
        getCharacter(page).then((newCharacter) => {
            setCharacter(newCharacter)
            console.log(newCharacter)
        })
    }

    useEffect(callCharacter, [page])

    return { character, page, setPage }
}