import React from 'react';
import { Monitor, Cpu, PenTool as Tool, Shield } from 'lucide-react';

const services = [
  {
    title: 'Mantenimiento Preventivo',
    description: 'Evita problemas futuros con nuestro servicio de mantenimiento regular.',
    icon: Shield,
  },
  {
    title: 'Optimización de Hardware',
    description: 'Mejora el rendimiento de tu PC con actualizaciones de componentes.',
    icon: Cpu,
  },
  {
    title: 'Limpieza Profesional',
    description: 'Servicio completo de limpieza para mantener tu equipo en óptimas condiciones.',
    icon: Tool,
  },
  {
    title: 'Diagnóstico Especializado',
    description: 'Identificamos y solucionamos problemas con precisión.',
    icon: Monitor,
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Soluciones profesionales para el mantenimiento y optimización de tu computadora
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;