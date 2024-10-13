import { useState } from "react";
import './style.css';

const AddItem = ({ addItem }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState('Clothing');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!addItem) {
            console.error("addItem function is not provided");
            return;
        }

        const newItem = {
            id,
            name,
            quantity: parseInt(quantity),
            price: parseFloat(price),
            category,
        };

        addItem(newItem);
        alert('Item added successfully!');
        // Reset form fields
        setId('');
        setName('');
        setQuantity(1);
        setPrice(0);
        setCategory('Clothing');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ID"
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
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                required
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItem;
