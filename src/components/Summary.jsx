import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const API_URL = 'https://front2.nsideas.cl/api';

const Summary = ({ items, total }) => {
  const [clientName, setClientName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!clientName) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/purchases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientName, total, items }),
      });

      if (response.ok) {
        alert('Compra guardada exitosamente');
        localStorage.removeItem('shoppingList'); // Limpia el carrito
        navigate('/'); // Redirige a Home
      } else {
        throw new Error();
      }
    } catch {
      alert('Error al guardar la compra');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-medium">Productos seleccionados:</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t pt-4">
        <p className="font-bold">Total: ${total}</p>
      </div>

      <div className="space-y-2">
        <label className="block">Nombre del cliente:</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="flex gap-2 mt-4">
        <Button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
        >
          {isLoading ? 'Guardando...' : 'Guardar Compra'}
        </Button>
        <Button 
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default Summary;