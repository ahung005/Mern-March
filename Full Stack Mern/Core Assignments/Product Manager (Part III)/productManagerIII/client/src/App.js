import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import SingleProduct from './components/SingleProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={ <Main /> } path="/" /> 
                    <Route element={ <SingleProduct /> } path="/products/:id" />
                    <Route element={ <UpdateProduct /> } path="/products/update/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
    ) 
}

export default App;
