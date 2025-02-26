import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
          src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80"
          alt="PC Hardware Background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex h-full items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Expertos en</span>
            <span className="block text-cyan-400">Mantenimiento de PCs</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Optimizamos el rendimiento de tu computadora con servicios profesionales y componentes de alta calidad.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
              >
                Agendar Servicio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200 md:py-4 md:text-lg md:px-10"
              >
                Ver Productos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;