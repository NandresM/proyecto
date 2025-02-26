import React from 'react';
import { Users, Calendar, Award, Building } from 'lucide-react';

const stats = [
  { name: 'Clientes Satisfechos', value: '5000+', icon: Users },
  { name: 'Años de Experiencia', value: '10+', icon: Calendar },
  { name: 'Certificaciones', value: '15+', icon: Award },
  { name: 'Empresas Confían en Nosotros', value: '100+', icon: Building },
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-cyan-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-base text-cyan-100">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;