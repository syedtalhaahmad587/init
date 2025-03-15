import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import logo from "./logo.svg";
import "./App.css";
import ExcelImport from "./Export/Export";

function App() {
  return (
    <Router>
    <Routes>
      
        
          <Route path="/" element={<HomeScreen />} />
          <Route path="/export" element={<ExcelImport />} />
        
      
    </Routes>
    </Router>
  );
}

export default App;
