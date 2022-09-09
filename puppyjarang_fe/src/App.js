import React from "react";
import IntroPage from "./pages/IntroPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<IntroPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
