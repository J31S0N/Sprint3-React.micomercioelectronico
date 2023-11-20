import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Routes/";
import Home from "./Routes/home";
import Admin from "./Routes/admin";
import Logup from "./Routes/logup";
import Login from "./Routes/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={Index}></Route>
        <Route path="home" Component={Home}></Route>
        <Route path="login" Component={Login}></Route>
        <Route path="logup" Component={Logup}></Route>
        <Route path="admin" Component={Admin}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());

// Configura las rutas relacionadas con la autenticación
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:3001`);
});

// app.js
const { authenticateToken } = require('./middleware/auth');

// ...

app.use('/ruta-protegida', authenticateToken, (req, res) => {
  // Solo se llega aquí si el token es válido y el usuario está autenticado
  res.json({ mensaje: 'Ruta protegida' });
});
