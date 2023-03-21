import React from "react";
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
    
const Home = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
        <h1>Welcome!</h1>
    </div>
  );
}
    
const Item = (props) => { 
  const { stuff, textColor, backgroundColor } = useParams();
    
  return (
    <div style={{ textAlign: "center" }}>
      {
        isNaN(stuff) ? (<h2 style={ textColor ? ({ color: textColor, backgroundColor: backgroundColor }) : (null) }>The word is: { stuff }</h2>) : (<h2>The number is: { stuff }</h2>)
      }
    </div>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/:stuff" element={ <Item /> } />
          <Route path="/:stuff/:textColor/:backgroundColor" element={ <Item /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
    
export default App