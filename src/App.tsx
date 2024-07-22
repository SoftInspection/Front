import React from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Lobby from "./pages/Lobby";
import UndefinedAddress from './pages/UndefinedAddress';
import CheckAPI from "./pages/CheckAPI"
import Product from "./pages/Product";
import About from "./pages/About";
import Saved from "./pages/Saved";
import FeedbackPage from './pages/general_components/Feedback';
import InstructionForUser from './pages/InstructionForUser';
import Profile from "./pages/Profile";

import { SavedProductsProvider } from "./pages/context/SavedProductsContext";

import './App.css';

function App() {
  //! ADMINISTRATOR STATUS.
  const isAdmin = true;
  const isLoggedIn = false;
  //! --------------------

  return (
    <React.Fragment>
      <SavedProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Lobby />} />
            <Route path="/api" element={<CheckAPI isAdmin={isAdmin} />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/instruction" element={<InstructionForUser />} />
            <Route path="/about" element={<About />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/item/:name" element={<Product />} />
            <Route path="*" element={<UndefinedAddress />} />
          </Routes>
        </BrowserRouter >
      </SavedProductsProvider>
    </React.Fragment>
  );
}

export default App;
