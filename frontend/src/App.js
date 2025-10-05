import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MagsaysayAssessment from "./components/MagsaysayAssessment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MagsaysayAssessment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;