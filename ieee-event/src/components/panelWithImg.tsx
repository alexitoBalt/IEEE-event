import React from 'react';

function PanelWithImg({ imageUrl, title, description, buttonText, buttonHref }) {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-3/4 object-cover opacity-90"
      />

      <div className="relative z-10 bg-black bg-opacity-30 p-20 mb-60 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-gray-200">{description}</p>
        </div>

        {/* Botón para registrarse */}
        <div className="mt-6 text-center">
          <a
            href={buttonHref}
            className="inline-block bg-red-600 text-white rounded-lg px-6 py-2 text-lg font-medium hover:bg-red-700"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PanelWithImg;
