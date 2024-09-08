import React from 'react';

function Cardfirst() {
  return (
    <div className="m-10 max-w-3xl mx-auto">
      <div className="bg-blue-200 rounded-lg shadow-lg overflow-hidden p-20">
        {/* Título de la tarjeta */}
        <div className="p-4 text-center bg-blue-200">
          <h2 className="text-xl font-bold text-black">Introducción</h2>
        </div>

        <div className="flex">
          {/* Imagen con el circulo amarillo */}
          <div className="relative flex-shrink-0 w-64 h-64">
            <img
              src="https://conceptosclaros.com/wp-content/uploads/2016/07/RStudio-Ball.png"
              alt="Card Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-yellow-500 w-12 h-12 rounded-full"></div>
          </div>

          {/* Texto al lado de la imagen */}
          <div className="p-4 flex-1">
            <p className="text-gray-700">
              La ponencia "Introducción a R: De Funciones a Paquetes,
              de Paquetes a Papers" abordará el uso de R, desde la creación
              de funciones básicas hasta el desarrollo de paquetes personalizados,
              y su aplicación en investigaciones científicas. Se explorará cómo estructurar
              y publicar un paquete en CRAN, así como la importancia de la reproducibilidad
              en la investigación, mostrando cómo los paquetes pueden ser una herramienta
              clave en la publicación de papers académicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardfirst;
