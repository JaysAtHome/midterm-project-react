import {useState} from 'react';
import ItemTable from './ItemTable';

const SortItems = ({ items }) => {
  const [sortField, setSortField] = useState('quantity');
  const [sortOrder, setSortOrder] = useState('asc');

  // Sorting function
  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField] - b[sortField];
      } else {
        return b[sortField] - a[sortField];
      }
    });
  };

  const sortedItems = sortItems(items);

  return (
    <div>
      <h2>Sort Items</h2>
      <label htmlFor="sortField">Sort by: </label>
      <select
        id="sortField"
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
      >
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>

      <label htmlFor="sortOrder">Order: </label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* Display sorted items in a table */}
      <ItemTable items={sortedItems} />
    </div>
  );
};

export default SortItems;
