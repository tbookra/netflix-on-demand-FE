import { useState } from 'react'

const useDarkMode = (themeObject) => {
    const [theme, setTheme] = useState(themeObject)
    const { palette: { type } } = theme
    const toggleDarkMode = () => {
        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type: type === 'light' ? 'dark' : 'light'
            }
        }
        setTheme(updatedTheme)
    }
    return [theme, toggleDarkMode]
}

export default useDarkMode