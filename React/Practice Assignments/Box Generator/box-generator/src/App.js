import './App.css';
import React, { useState } from 'react';
import BoxForm  from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
    const [currentColor, setCurrentColor] = useState([]);


    return (
        <div className="App">
            <BoxForm currentColor={ currentColor } setCurrentColor={ setCurrentColor } />
            <BoxDisplay addColor={ currentColor } />
        </div>
    );
}

export default App;
