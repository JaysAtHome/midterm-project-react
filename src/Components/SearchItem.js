import { useState } from 'react';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);
  const [message, setMessage] = useState('');

  // Handle form submission for item search
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Search for the item by the provided ID
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
        <input 
          type="text" 
          placeholder="Item ID" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          required 
        />
        <button type="submit">Search</button>

        {/* Display message if the item is not found */}
        {message && <p>{message}</p>}
      </form>

      {/* Display the found item details */}
      {item && (
        <div className="result-box">
          <h3>Item Details</h3>
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Quantity:</strong> {item.quantity}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Category:</strong> {item.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
