import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/people/" />
            <Route element={<Detail/>} path="/people/:id" />    /* The :id part of our path is a variable that we 
            must give value to. */
        </Routes>
      </BrowserRouter>                           
    </div>
  );
}
export default App;