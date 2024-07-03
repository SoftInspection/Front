import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Lobby from "./pages/Lobby";
import UndefinedAddress from './pages/UndefinedAddress';
import CheckAPI from "./pages/CheckAPI"

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lobby />} />
          <Route path="/api" element={<CheckAPI />} />
          <Route path="*" element={<UndefinedAddress />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
