import { useState } from "react";

const RemoveItem = ({ removeItem }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = removeItem(id);
      setMessage(result.message);
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
          <h2>Remove Item</h2>
            <input type="text" placeholder="Item ID" value={id} onChange={(e) => setId(e.target.value)} required />
            <button type="submit">Remove Item</button>
            {message && <p>{message}</p>}
          </form>
        </div>
      );
    };
    
    export default RemoveItem;