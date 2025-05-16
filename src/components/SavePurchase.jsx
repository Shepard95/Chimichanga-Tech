import { useState } from 'react';
import Button from './Button';

const API_URL = 'https://front2.nsideas.cl/api';

const SavePurchase = ({ total, clientName }) => {
  const [isLoading, setIsLoading] = useState(false);

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
        body: JSON.stringify({ clientName, total }),
      });

      if (response.ok) {
        alert('Compra guardada exitosamente');
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
    <Button 
      onClick={handleSubmit}
      disabled={isLoading}
      className="text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
    >
      {isLoading ? 'Guardando...' : 'Guardar Compra'}
    </Button>
  );
};

export default SavePurchase;