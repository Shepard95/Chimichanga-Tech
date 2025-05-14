const ItemList = ({ items, onRemove }) => {
  if (items.length === 0) {
    return <p className="text-gray-500 p-3 border rounded-lg">No has agregado productos aún</p>;
  }

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center p-3 border rounded-lg">
          <span>{item.name} - ${item.price}</span>
          <button
            onClick={() => onRemove(index)}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;