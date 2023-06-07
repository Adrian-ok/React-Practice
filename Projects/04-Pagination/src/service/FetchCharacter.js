export async function getCharacter(page) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const json = await response.json()

    const data = json.results

    // return data

    return data.map(item => ({
        id: item.id,
        nombre: item.name,
        especie: item.species
    }))

}