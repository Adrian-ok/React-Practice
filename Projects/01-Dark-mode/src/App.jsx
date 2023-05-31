import { useContext } from "react"
import { theme } from "./context/ThemeContext"
import { ButtonTheme } from "./components/ButtonTheme.jsx"

function App() {

  // const { themeMode, setThemeMode } = useContext(theme)

  return (
    <div>
      <ButtonTheme/>

      <div>

      </div>
    </div>
  )
}

export default App
