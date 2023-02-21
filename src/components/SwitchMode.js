import React, {useContext} from 'react';

import {modeContext} from '../contexts/ModeContext';

const SwitchMode = () => {
    const {toggleMode, isDarkMode }= useContext(modeContext)
    const addNeededClassForTheme = () => {
        toggleMode()
        const parentElement = document.querySelector("#container > div")
        parentElement.className = isDarkMode? "light-theme": "dark-theme"
    }
    return (
        <div onClick={addNeededClassForTheme}>
            Switch Mode
        </div>
    );
}
 
export default SwitchMode;