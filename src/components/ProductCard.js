import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductCard;
