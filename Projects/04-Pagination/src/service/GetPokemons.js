export async function getPokemons() {
    const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon?limit=100'

    const resp = await fetch(URL_POKEMON)
    const json = await resp.json()

    const data = json.results

    const newPokemon = data.map(item => {

        let aux = item.url.split('/')
        let id = aux[6]
        let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return {
            id,
            nombre : item.name,
            imagen : url
        }
    })

    return newPokemon
}