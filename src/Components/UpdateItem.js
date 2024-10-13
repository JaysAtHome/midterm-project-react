import { useState } from "react";

const UpdateItem = ({ updateItem }) => {
    const [id, setId] = useState('');
    const [field, setField] = useState('quantity');
    const [newValue, setNewValue] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = updateItem(id, field, newValue);
        setMessage(result.message);
};

return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input type="number" placeholder="New Value" value={newValue} onChange={(e) => setNewValue(Number(e.target.value))} required />
        <button type="submit">Update Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;