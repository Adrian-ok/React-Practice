import { useGetCharacter } from './hook/useGetCharacter'
import { Character } from './components/Character'

function App() {

  const { character, page, setPage } = useGetCharacter()

  return (
    <main>
      {
        character.length > 0 ?
          <Character characters={character} /> : <></>
      }
      <div>
        <button onClick={() => setPage(page - 1)}>
          previus
        </button>
        <button onClick={() => setPage(page + 1)}>
          next
        </button>
      </div>
    </main>
  )
}

export default App
