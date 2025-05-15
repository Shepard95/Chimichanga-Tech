import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Summary = ({ items, total }) => {
  const [clientName, setClientName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({ clientName, total }); // Para el Checkpoint 3
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
          className="border p-2 rounded-lg w-full"  // rounded-lg para coincidir
        />
      </div>
      <div className="flex gap-2 mt-4">
        <Button 
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"  // Estilo idéntico a Home.jsx
        >
          Guardar Compra
        </Button>
        <Button 
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600"  // Mismo estilo pero en gris
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default Summary;