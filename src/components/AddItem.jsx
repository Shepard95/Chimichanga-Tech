import { useState } from 'react';

const AddItem = ({ products, onAdd }) => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    const product = products.find(p => p.id == selectedProduct);
    if (product) {
      onAdd(product);
      setSelectedProduct('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="border p-2 rounded flex-grow"
          required
        >
          <option value="">Selecciona un producto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default AddItem;