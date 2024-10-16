import { useState } from 'react';

const UpdateItem = ({ updateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedValue = parseInt(newValue);

    // Prevent negative values for quantity and price
    if (field === 'quantity' || field === 'price') {
      updatedValue = Math.max(0, updatedValue); // Set to 0 if negative
    }

    const result = updateItem(id, field, updatedValue);
    setMessage(result.message);

    // Reset the form
    setId('');
    setField('quantity');
    setNewValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input
        type="number"
        placeholder="New Value"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        required
      />
      <button type="submit">Update Item</button>
      <p>{message}</p>
    </form>
  );
};

export default UpdateItem;