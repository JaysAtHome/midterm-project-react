import { useState, useEffect } from 'react';

const SortItems = ({ items }) => {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortField, setSortField] = useState('quantity'); // Default sort field
  const [sortOrder, setSortOrder] = useState('ascending'); // Default sort order

  useEffect(() => {
    const sortItems = () => {
      let sorted = [...items];

      sorted.sort((a, b) => {
        let comparison = 0;

        if (sortField === 'id' || sortField === 'name') {
          // String comparison for ID and Name (alphanumerical sorting)
          comparison = a[sortField].localeCompare(b[sortField]);
        } else {
          // Numerical comparison for quantity and price
          comparison = a[sortField] - b[sortField];
        }

        return sortOrder === 'ascending' ? comparison : -comparison;
      });

      setSortedItems(sorted);
    };

    sortItems(); // Automatically sort items when component mounts or dependencies change
  }, [items, sortField, sortOrder]); // Re-run sorting when items, field, or order changes

  return (
    <div>
      <h3>Sorted Items (Automatic)</h3>
      <label>Sort by: </label>
      <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
        <option value="id">Item ID</option>
        <option value="name">Name</option>
      </select>

      <label> Order: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortItems;