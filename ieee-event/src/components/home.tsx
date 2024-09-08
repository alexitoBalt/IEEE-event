import React from 'react';

function Home() {
  return (
      <div className="relative h-screen flex items-center justify-center ">
          {/* Imagen de fondo */}
          <img
              src="https://www.vipnet360.com/wp-content/uploads/2021/06/La-importancia-de-contar-con-un-desarrollador-o-programador-para-Wordpress_Vipnet360.png" // Cambia esto por la URL de tu imagen
              alt="Background"
              className="absolute inset-0 w-full h-3/4 object-cover"
          />

          <div className="relative z-10 bg-black bg-opacity-30 p-20 mb-60 rounded-lg shadow-lg">
              <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4 text-white">TALLER: NTRODUCCION A R</h1>
                  <p className="text-gray-200">De Funciones a Paquetes, de Paquetes a Papers</p>
              </div>

              {/* Botón poara registrarse */}
              <div className="mt-6 text-center">
                  <a
                      href="https://www.gaaaaaaa.com"
                      className="inline-block bg-red-600 text-white rounded-lg px-6 py-2 text-lg font-medium hover:bg-red-700"
                  >
                      Registrarme
                  </a>
              </div>
          </div>
      </div>
  );
}

export default Home;
