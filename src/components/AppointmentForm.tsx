import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface Appointment {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
}

const services = [
  'Mantenimiento Preventivo',
  'Mantenimiento Correctivo',
  'Optimización de Hardware',
  'Limpieza Profesional',
  'Diagnóstico',
];

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState<Appointment>({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una implementación real, aquí enviaríamos los datos al servidor
    console.log('Cita agendada:', appointment);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
          <h3 className="font-bold">¡Cita agendada con éxito!</h3>
          <p>Te hemos enviado un correo con los detalles de tu cita.</p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 hover:text-blue-700"
        >
          Agendar otra cita
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={appointment.name}
          onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={appointment.email}
          onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Servicio</label>
        <select
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={appointment.service}
          onChange={(e) => setAppointment({ ...appointment, service: e.target.value })}
        >
          <option value="">Selecciona un servicio</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="date"
          required
          min={new Date().toISOString().split('T')[0]}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={appointment.date}
          onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hora</label>
        <input
          type="time"
          required
          min="09:00"
          max="18:00"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={appointment.time}
          onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        <Calendar className="h-5 w-5 mr-2" />
        Agendar Cita
      </button>
    </form>
  );
};

export default AppointmentForm;