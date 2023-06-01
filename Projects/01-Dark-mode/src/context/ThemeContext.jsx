import { createContext, useState } from "react"

export const theme = createContext()

export function changeTheme ({ children }) {

    const [themeMode, setThemeMode] = useState('dark')

    return (
        <theme.Provider value={{
            themeMode,
            setThemeMode
        }}>
            {children}
        </theme.Provider>
    )
}