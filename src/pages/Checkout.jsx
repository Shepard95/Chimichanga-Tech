import { useState, useEffect } from 'react';
import Summary from '../components/Summary';

const Checkout = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('shoppingList')) || [];
    setItems(savedItems);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Resumen de Compra</h1>
      <Summary items={items} total={total} />
    </div>
  );
};

export default Checkout;