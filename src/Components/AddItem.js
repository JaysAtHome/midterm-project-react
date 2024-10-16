import { useState } from 'react';

const AddItem = ({ addItem, items }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicate ID
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      setMessage(`Item with ID ${id} already exists!`);
      return;
    }

    const newQuantity = Math.max(0, quantity);
    const newPrice = Math.max(0, price);

    addItem({ id, name, quantity: newQuantity, price: newPrice, category });
    setMessage('Item added successfully!');
    
    // resets input box after adding an item
    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    setCategory('Clothing');
  };
  // individual input boxes for each element (Item ID, Name, Quantity, Price, Category)
  return (
    <form onSubmit={handleSubmit}>
    <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(0, e.target.value))} // Prevent negative values
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Math.max(0, e.target.value))} // Prevent negative prices
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Item</button>
      <p>{message}</p>
    </form>
  );
};

export default AddItem;