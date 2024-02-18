import React from 'react';
import { useTheme } from './ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header>
            <h1>Theme Switcher</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
        </header>
    );
}

export default Header;