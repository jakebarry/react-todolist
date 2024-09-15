import React, { useEffect } from 'react'

// Custom hooks
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeController = () => {

    const defaultDark = window.matchMedia('(prefers-colour-scheme: dark').matches
    const [theme, setTheme] = useLocalStorage('react-todo.theme', defaultDark ? 'dark' : 'light')

    // Dark Mode
    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme])

    return (
        <aside>
            {/* <>
                <button>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <input
                    type='range'
                    min='0'
                    max='360'
                    aria-label='Change colour theme slider'
                ></input>
            </> */}
            <div className='container'>
                <button
                    className='darkMode'
                    role='switch'
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    aria-label='Dark mode button'
                >
                    {theme === 'dark' ? <i className="darkButton fa-regular fa-sun"></i> : <i className="darkButton fa-solid fa-moon"></i>}
                    {console.log(theme)}
                </button>
                {/* <button>
                    <i class="fa-solid fa-palette"></i>
                </button> */}
            </div>
        </aside>
    )
}

export default ThemeController