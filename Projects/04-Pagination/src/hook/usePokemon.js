import { useEffect, useState } from "react";
import { getPokemons } from '../service/GetPokemons'

export function usePokemon() {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    const callPokemons = () => {
        getPokemons().then(newPokemon => {
            setPokemons(newPokemon)
            setLoading(false)
        })
    }

    useEffect(callPokemons, [])

    return { pokemons, loading }
}