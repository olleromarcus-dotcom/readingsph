import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompleteMagsaysayAssessment from "./components/CompleteMagsaysayAssessment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompleteMagsaysayAssessment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;