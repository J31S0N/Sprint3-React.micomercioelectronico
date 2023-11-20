import React, { useState } from 'react';

const Home = () => {
const [carrito, setCarrito] = useState([]);

const handleCompra = async () => {
    try {
      // Realiza la solicitud POST al servidor
    const response = await fetch('http://tu-servidor.com/api/compra', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ carrito }),
    });

    if (response.ok) {
        // La compra se realizó con éxito, puedes hacer algo en tu aplicación
        alert('Compra exitosa');
        // También puedes limpiar el carrito localmente si lo deseas
        setCarrito([]);
    } else {
        // Manejar errores si la respuesta no fue exitosa
        console.error('Error al realizar la compra');
    }
    } catch (error) {
    console.error('Error al realizar la compra', error);
    }
};

  // ... Otro código para mostrar productos, manejar el carrito, etc.

return (
    <div>
      {/* Aquí mostrarías tus productos y el carrito */}
    <button onClick={handleCompra}>Comprar</button>
    </div>
);
};

export default Home;
