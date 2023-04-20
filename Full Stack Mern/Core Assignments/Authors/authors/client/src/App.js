import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DisplayAll from "./components/DisplayAll";
import AddAuthor from "./components/AddAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={ <DisplayAll /> } />
                    <Route path="/new" element={ <AddAuthor /> } />
                    <Route path="/edit/:id" element={ <EditAuthor /> }  />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;