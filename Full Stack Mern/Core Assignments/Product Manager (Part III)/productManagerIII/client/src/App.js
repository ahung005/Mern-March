import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./view/Main";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:id" element={<OneProduct />}  />
                    <Route path="/product/update/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;