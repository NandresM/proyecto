import React from 'react';
import { Monitor, PenTool as Tool, Cpu, Shield, HardDrive, Settings, Database, Building } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Mantenimiento Preventivo',
    description: 'Evita problemas futuros con revisiones periódicas y limpieza profesional.',
    features: [
      'Limpieza de componentes',
      'Actualización de software',
      'Verificación de temperatura',
      'Optimización del sistema',
    ],
  },
  {
    icon: Tool,
    title: 'Mantenimiento Correctivo',
    description: 'Solución rápida y efectiva para problemas existentes.',
    features: [
      'Diagnóstico especializado',
      'Reparación de componentes',
      'Solución de errores',
      'Recuperación de datos',
    ],
  },
  {
    icon: Cpu,
    title: 'Optimización de Hardware',
    description: 'Mejora el rendimiento de tu equipo con actualizaciones de componentes.',
    features: [
      'Instalación de RAM',
      'Actualización de SSD',
      'Mejora de procesador',
      'Instalación de tarjeta gráfica',
    ],
  },
  {
    icon: Monitor,
    title: 'Diagnóstico y Consultoría',
    description: 'Asesoramiento profesional para mejorar el rendimiento de tu equipo.',
    features: [
      'Análisis de rendimiento',
      'Recomendaciones personalizadas',
      'Presupuesto detallado',
      'Plan de mejoras',
    ],
  },
  {
    icon: HardDrive,
    title: 'Respaldo de Datos',
    description: 'Protege tu información importante con copias de seguridad profesionales.',
    features: [
      'Backup completo',
      'Recuperación de archivos',
      'Migración de datos',
      'Almacenamiento seguro',
    ],
  },
  {
    icon: Settings,
    title: 'Instalación de Componentes',
    description: 'Montaje profesional de nuevos componentes y periféricos.',
    features: [
      'Instalación de hardware',
      'Configuración de drivers',
      'Pruebas de rendimiento',
      'Optimización del sistema',
    ],
  },
  {
    icon: Database,
    title: 'Servicios de Software',
    description: 'Instalación y configuración de programas y sistemas operativos.',
    features: [
      'Instalación de Windows',
      'Actualización de drivers',
      'Instalación de programas',
      'Eliminación de malware',
    ],
  },
  {
    icon: Building,
    title: 'Servicios Empresariales',
    description: 'Soluciones integrales para empresas y organizaciones.',
    features: [
      'Mantenimiento de flotas',
      'Soporte técnico',
      'Redes y servidores',
      'Consultoría IT',
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Soluciones profesionales para el mantenimiento y optimización de tu equipo
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Solicitar Servicio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu equipo?</h2>
          <p className="text-xl mb-8">
            Contáctanos para una evaluación gratuita de tu computadora
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Agendar Cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;