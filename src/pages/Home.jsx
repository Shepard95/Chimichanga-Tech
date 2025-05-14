import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

const API_URL = 'https://front2.nsideas.cl/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState(() => {
    const savedList = localStorage.getItem('shoppingList');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addToShoppingList = (product) => {
    setShoppingList(prev => [...prev, product]);
  };

  const removeFromShoppingList = (index) => {
    setShoppingList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Lista de Compras</h1>
      
      {loading ? (
        <p>Cargando productos disponibles...</p>
      ) : (
        <div className="flex gap-8">
          {}
          <div className="flex-1">
            <h2 className="font-medium mb-4 text-lg">Productos Disponibles</h2>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <span>{product.name} - ${product.price}</span>
                  <button
                    onClick={() => addToShoppingList(product)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Agregar
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Lista de tus productos */}
          <div className="flex-1">
            <h2 className="font-medium mb-4 text-lg">Tus Productos</h2>
            <ItemList items={shoppingList} onRemove={removeFromShoppingList} />
          </div>
        </div>
      )}
    </div>
  );
}