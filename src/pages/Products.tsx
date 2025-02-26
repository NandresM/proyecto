import React from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categories = [
  { name: 'Componentes PC', items: ['RAM', 'SSD', 'Tarjetas Gráficas', 'Procesadores'] },
  { name: 'Periféricos', items: ['Teclados', 'Mouse', 'Monitores', 'Auriculares'] },
  { name: 'Mantenimiento', items: ['Kits de Limpieza', 'Herramientas', 'Pasta Térmica'] },
];

const products = [
  {
    id: 1,
    name: 'SSD NVMe 1TB',
    category: 'Componentes PC',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&q=80',
    description: 'SSD NVMe de alta velocidad para máximo rendimiento',
  },
  {
    id: 2,
    name: 'Kit de Limpieza Profesional',
    category: 'Mantenimiento',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&q=80',
    description: 'Kit completo para mantenimiento de PC',
  },
  // Más productos aquí...
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Categorías</h2>
              {categories.map((category) => (
                <div key={category.name} className="mb-4">
                  <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;