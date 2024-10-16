import React from 'react';
import './style.css';


const ItemTable = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.category}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No items found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ItemTable;