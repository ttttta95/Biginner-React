import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Home = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: isDarkMode ? "#000000" :  "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                    padding: "100px",
                    textAlign: "center",
        }}
        >
            <h1>{isDarkMode ? "Dark Mode " : "Light Mode"}</h1>
            <button onClick={toggleTheme}>ToggleTheme</button>
        </div>
    );
};

export default Home;