import React from 'react';

const ProductTable = () => {
  const products = [
    { rank: 1, name: 'Task Forge', price: '$24.67', qty: '289788' },
    { rank: 2, name: 'Java Core: Expert', price: '$24.67', qty: '198799' },
    { rank: 3, name: 'CodeMaster', price: '$24.57', qty: '98899' },
  ];

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.rank}>
            <td>{product.rank}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
