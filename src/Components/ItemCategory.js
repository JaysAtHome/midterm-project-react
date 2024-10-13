import { useState } from 'react';
import ItemTable from './ItemTable';

const ItemCategory = ({ items }) => {
    const [category, setCategory] = useState('Clothing');
    const filteredItems = items.filter((item) => item.category === category);

    return (
        <div>
          <h2>Display Items by Category</h2>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <ItemTable items={filteredItems} />
        </div>
      );
    };
    
    export default ItemCategory;