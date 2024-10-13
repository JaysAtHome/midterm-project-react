import React from 'react';
import ItemTable from './ItemTable';

const LowStock = ({ items }) => {
  const lowStockItems = items.filter((item) => item.quantity <= 5);

  return (
    <div>
      <h2>Low Stock Items</h2>
      <ItemTable items={lowStockItems} />
    </div>
  );
};

export default LowStock;
