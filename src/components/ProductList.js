import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css'; // Import CSS module for styling
import productsData from '../data/products.json';

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {productsData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
