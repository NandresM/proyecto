import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Orientación al Cliente',
    description: 'Nuestro principal objetivo es la satisfacción y confianza de nuestros clientes.',
  },
  {
    icon: Shield,
    title: 'Calidad y Seguridad',
    description: 'Utilizamos componentes certificados y seguimos protocolos de seguridad estrictos.',
  },
  {
    icon: Clock,
    title: 'Eficiencia',
    description: 'Optimizamos nuestros procesos para ofrecer soluciones rápidas y efectivas.',
  },
  {
    icon: Award,
    title: 'Profesionalismo',
    description: 'Nuestro equipo está altamente capacitado y en constante actualización.',
  },
];

const team = [
  {
    name: 'Juan Pérez',
    role: 'Director Técnico',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    description: '10 años de experiencia en mantenimiento de hardware',
  },
  {
    name: 'Laura Sánchez',
    role: 'Especialista en Reparación',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    description: 'Experta en diagnóstico y solución de problemas',
  },
  {
    name: 'Miguel Torres',
    role: 'Técnico Senior',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80',
    description: 'Especialista en optimización de rendimiento',
  },
];

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl max-w-2xl">
            Desde 2013, PC-Clean se ha dedicado a brindar servicios de mantenimiento y optimización
            de computadoras con los más altos estándares de calidad.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              PC-Clean nació de la pasión por la tecnología y el compromiso con la excelencia.
              Lo que comenzó como un pequeño taller de reparación se ha convertido en un referente
              en el mantenimiento y optimización de equipos informáticos.
            </p>
            <p className="text-gray-600">
              Hoy, contamos con un equipo de profesionales certificados y las herramientas más
              avanzadas para garantizar el mejor servicio a nuestros clientes.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80"
              alt="Nuestras instalaciones"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;