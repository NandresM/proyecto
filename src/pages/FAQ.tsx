import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué incluye el servicio de mantenimiento preventivo?',
    answer: 'El servicio de mantenimiento preventivo incluye limpieza profunda de componentes, actualización de software, verificación de temperatura, optimización del sistema operativo y diagnóstico general del equipo.',
  },
  {
    question: '¿Cuánto tiempo toma el servicio de mantenimiento?',
    answer: 'El tiempo puede variar según el servicio requerido. Un mantenimiento preventivo básico toma aproximadamente 2-3 horas, mientras que servicios más complejos pueden requerir 24-48 horas.',
  },
  {
    question: '¿Ofrecen garantía por los servicios?',
    answer: 'Sí, todos nuestros servicios incluyen garantía. El período de garantía varía según el tipo de servicio, desde 30 días para mantenimiento hasta 1 año para instalación de componentes.',
  },
  {
    question: '¿Realizan servicio a domicilio?',
    answer: 'Sí, ofrecemos servicio a domicilio para la mayoría de nuestros servicios. El costo adicional dependerá de la ubicación y el tipo de servicio requerido.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y pagos a través de aplicaciones móviles.',
  },
  {
    question: '¿Cómo puedo agendar un servicio?',
    answer: 'Puedes agendar un servicio a través de nuestro sitio web, llamando a nuestro número de contacto o visitando nuestra tienda física.',
  },
  {
    question: '¿Qué hacer en caso de emergencia?',
    answer: 'Contamos con servicio de emergencia disponible. Puedes contactarnos a través de nuestra línea de emergencia 24/7 o utilizar nuestro chat en línea.',
  },
  {
    question: '¿Trabajan con empresas?',
    answer: 'Sí, ofrecemos servicios especializados para empresas, incluyendo contratos de mantenimiento, soporte técnico y consultoría IT.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-gray-600 mb-6">
            Contáctanos directamente y responderemos todas tus dudas
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contactar
            </a>
            <a
              href="#"
              className="inline-block bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Chat en vivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;