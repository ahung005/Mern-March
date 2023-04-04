import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import SingleProduct from './components/SingleProduct';

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={ <Main/> } path="/" default /> 
                    <Route element={ <SingleProduct/> } path="/products/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    ) 
}

export default App;
