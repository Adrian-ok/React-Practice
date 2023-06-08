import { usePokemon } from './hook/usePokemon'
import { Pagination } from './components/Pagination'
import { useState } from 'react'

function App() {

  const { pokemons, loading } = usePokemon()

  const [currentPage, setCurrentPage] = useState(0)
  
  const paginationPokemons = (pokemons) => {
    return pokemons.slice(currentPage, currentPage + 6)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 6)
  }

  const previusPage = () => {
    setCurrentPage(currentPage - 6)
  }


  return (
    <main className="flex flex-col items-center">

      {loading && <p>CARGANDO....</p>}
      <div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                NOMBRE
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                IMAGEN
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {paginationPokemons(pokemons).map((item, i) => {
              return (
                <tr key={i}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{i}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.nombre}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <img src={item.imagen} style={{ height: 75 }} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div>
        <Pagination next={nextPage} prev={previusPage}/>
      </div>
    </main>
  )
}

export default App

// import { useGetCharacter } from './hook/useGetCharacter'
// import { Character } from './components/Character'
// import { Pagination } from './components/component'

// const { character, page, setPage } = useGetCharacter()

// {
//   character.length > 0 ?
//     <Character characters={character} /> : <></>
// }

// <Pagination/>

// {/* <div>
// <button onClick={() => setPage(page - 1)}>
//   previus
// </button>
// <button onClick={() => setPage(page + 1)}>
//   next
// </button>
// </div> */}

