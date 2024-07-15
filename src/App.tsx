import React from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Lobby from "./pages/Lobby";
import UndefinedAddress from './pages/UndefinedAddress';
import CheckAPI from "./pages/CheckAPI"
import Product from "./pages/Product";
import About from "./pages/About";

import './App.css';
import FeedbackPage from './pages/general_components/Feedback';
import InstructionForUser from './pages/InstructionForUser';

function App() {
  //! ADMINISTRATOR STATUS.
  const isAdmin = true;
  //! --------------------

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lobby />} />
          <Route path="/api" element={<CheckAPI isAdmin={isAdmin} />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/instruction" element={<InstructionForUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:name" element={<Product />} />
          <Route path="*" element={<UndefinedAddress />} />
        </Routes>
      </BrowserRouter >
    </React.Fragment>
  );
}

export default App;
