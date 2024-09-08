import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from "./pages/Lobby";
import UndefinedAddress from './pages/UndefinedAddress';
import CheckAPI from "./pages/CheckAPI"
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Saved from "./pages/Saved";
import FeedbackPage from './pages/Feedback';
import InstructionForUser from './pages/InstructionForUser';
import Profile from "./pages/Profile";
import AddCard from "./pages/Bank/AddCard";
import CompareProducts from "./pages/CompareProducts";
import BuySoft from "./pages/BuySoft";
import TopUpBalance from "./pages/Bank/TopUpBalance";
import TransactionHistory from "./pages/TransactionHistory";

import { SavedProductsProvider } from "./pages/context/SavedProductsContext";

import './App.css';

function App() {
  //! ADMINISTRATOR STATUS.
  const isAdmin = true;
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
            <Route path="/compare" element={<CompareProducts />} />
            <Route path="/add+new+card" element={<AddCard />} />
            <Route path="/deposit" element={<TopUpBalance />} />
            <Route path="/transactions" element={<TransactionHistory /> } />
            <Route path="/item/:name" element={<ProductPage />} />
            <Route path="/buy/:name" element={<BuySoft />} />
            <Route path="*" element={<UndefinedAddress />} />
          </Routes>
        </BrowserRouter >
      </SavedProductsProvider>
    </React.Fragment>
  );
}

export default App;
