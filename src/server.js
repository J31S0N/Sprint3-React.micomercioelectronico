const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; 

// Middleware para analizar solicitudes con cuerpo JSON
app.use(bodyParser.json());

// Definir rutas para GET y POST
app.get('/api/ejemplo', (req, res) => {
  res.json({ mensaje: 'Respuesta GET' });
});

app.post('/api/ejemplo', (req, res) => {
  const datosRecibidos = req.body;
  res.json({ mensaje: 'Respuesta POST', datos: datosRecibidos });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});


// En tu servidor backend (por ejemplo, usando Express)
const express = require('express');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

// Manejar la solicitud POST para las compras
app.post('/api/compra', (req, res) => {
  const { carrito } = req.body;

  // Lógica para gestionar la compra en la base de datos
  // ...

  // Responder a la solicitud
  res.json({ mensaje: 'Compra registrada con éxito' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
