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
          <h2>Remove Item</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
            <button type="submit">Remove Item</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };
    
    export default RemoveItem;