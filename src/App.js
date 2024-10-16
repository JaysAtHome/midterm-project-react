import { useState } from 'react';
import AddItem from './Components/AddItem';
import UpdateItem from './Components/UpdateItem';
import RemoveItem from './Components/RemoveItem';
import ItemCategory from './Components/ItemCategory';
import SearchItem from './Components/SearchItem';
import SortItems from './Components/SortItems';
import LowStock from './Components/LowStock';
import ItemTable from './Components/ItemTable';

const App = () => {
  const [items, setItems] = useState([]);
  const [view, setView] = useState('home');
  const [message, setMessage] = useState('');
  
  const addItem = (newItem) => {
    const existingItem = items.find((item) => item.id === newItem.id);
    if (existingItem) {
      setMessage(`Item with ID ${newItem.id} already exists!`);
      return;
    }

    setItems([...items, newItem]);
  };

  const updateItem = (id, field, newValue) => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return { message: 'Item not found!' };

    const updatedItems = [...items];
    const oldValue = updatedItems[index][field];
    updatedItems[index][field] = newValue;
    setItems(updatedItems);

    return {
      message: `${field === 'quantity' ? 'Quantity' : 'Price'} of Item ${updatedItems[index].name} is updated from ${oldValue} to ${newValue}`
    };
  };

  
  const removeItem = (id) => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return { message: 'Item not found!' };

    const itemName = items[index].name;
    setItems(items.filter((item) => item.id !== id));

    return { message: `Item ${itemName} has been removed from the inventory` };
  };

  return (
    <div className="app-container">
      <div className="dashboard">
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('add')}>Add Item</button>
        <button onClick={() => setView('update')}>Update Item</button>
        <button onClick={() => setView('remove')}>Remove Item</button>
        <button onClick={() => setView('category')}>Display Items by Category</button>
        <button onClick={() => setView('all')}>Display All Items</button>
        <button onClick={() => setView('search')}>Search Item</button>
        <button onClick={() => setView('sort')}>Sort Items</button>
        <button onClick={() => setView('lowStock')}>Display Low Stock Items</button>
      </div>

      <div className="main-content">
        {view === 'home' && <ItemTable items={items.slice(-5)} />}
        {view === 'add' && <AddItem addItem={addItem} items={items} />}
        {view === 'update' && <UpdateItem updateItem={updateItem} />}
        {view === 'remove' && <RemoveItem removeItem={removeItem} />}
        {view === 'category' && <ItemCategory items={items} />}
        {view === 'all' && <ItemTable items={items} />}
        {view === 'search' && <SearchItem items={items} />}
        {view === 'sort' && <SortItems items={items} />}
        {view === 'lowStock' && <LowStock items={items} />}
      </div>
    </div>
  );
};

export default App;
