import React from 'react';

function TestTailwind() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="https://tailwindcss.com/img/logos/workflow-mark-indigo-500.svg" alt="Tailwind Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">¡Tailwind está funcionando!</div>
          <p className="text-gray-500">Este es un pequeño test para comprobar si Tailwind está bien configurado.</p>
        </div>
      </div>
    </div>
  );
}

export default TestTailwind;
