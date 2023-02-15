import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Foam2 from "./Pages/Foam2";
import Foam3 from "./Pages/Foam3";
import Foam4 from "./Pages/Foam4";
import Foam5 from "./Pages/Foam5";
import Foam6 from "./Pages/Foam6";







function App(){
    return (
        <>
        
         <BrowserRouter>
        <Navbar />
         <Routes>
         
            <Route exact  path="/"  element={<Home/>} />
            <Route exact  path="/foam-1"  element={<Home/>} />
            <Route exact path="/foam-2" element={<Foam2/>} />
            <Route exact path="/foam-3" element={<Foam3/>} />
            <Route exact path="/foam-4" element={<Foam4/>} />
            <Route exact path="/foam-5" element={<Foam5/>} />
            <Route exact path="/foam-6" element={<Foam6/>} />

            </Routes>
            </BrowserRouter> 
        </>
    )
}


export default App ;

