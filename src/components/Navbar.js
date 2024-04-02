import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/products" className={styles.navLink}>Products</Link></li>
        <li><Link to="/about" className={styles.navLink}>About</Link></li>
        <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        <li><Link to="/login" className={styles.navLink}>Login</Link></li>
        <li><Link to="/register" className={styles.navLink}>Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
