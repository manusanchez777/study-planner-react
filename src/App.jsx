import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 
//este es el componente principal de la aplicacion, aqui definimos las rutas y se importan los componentes principales que vamos a usar//