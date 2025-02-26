import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Cómo mantener tu PC en óptimas condiciones',
    excerpt: 'Consejos prácticos para el mantenimiento preventivo de tu computadora...',
    author: 'Juan Pérez',
    date: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80',
    category: 'Mantenimiento',
  },
  {
    id: 2,
    title: 'Guía para elegir los mejores componentes',
    excerpt: 'Todo lo que necesitas saber antes de actualizar tu PC...',
    author: 'María González',
    date: '2024-02-18',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80',
    category: 'Hardware',
  },
  {
    id: 3,
    title: 'Señales de que tu PC necesita mantenimiento',
    excerpt: 'Aprende a identificar cuando tu computadora necesita atención...',
    author: 'Carlos Rodríguez',
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80',
    category: 'Diagnóstico',
  },
];

const categories = [
  'Mantenimiento',
  'Hardware',
  'Software',
  'Diagnóstico',
  'Optimización',
  'Seguridad',
];

const Blog = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog PC-Clean</h1>
          <p className="text-xl max-w-2xl">
            Consejos, guías y noticias sobre mantenimiento y optimización de computadoras
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:w-48 object-cover"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                        {post.category}
                      </div>
                      <h2 className="block mt-1 text-2xl font-semibold text-gray-900">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-gray-600">{post.excerpt}</p>
                      <div className="mt-4 flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="mt-4">
                        <a
                          href="#"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          Leer más
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 flex items-center"
                    >
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Suscríbete para recibir las últimas actualizaciones y consejos.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                   Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;