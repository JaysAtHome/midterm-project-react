import { useState } from 'react';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundItem = items.find((item) => item.id === id);
    if (foundItem) {
      setItem(foundItem);
      setMessage('');
    } else {
      setMessage('Item not found!');
      setItem(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Search Item</h2>
        <input type="text" placeholder="Item ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <button type="submit">Search</button>
        {message && <p>{message}</p>}
      </form>
      {item && (
        <div>
          <h3>Item Details</h3>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;