import React from 'react';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutHeading}>About Us</h2>
      <div className={styles.aboutContent}>
        <p className={styles.aboutText}>Welcome to our clothing store!</p>
        <p className={styles.aboutText}>
          At our store, we're passionate about fashion and providing our customers with the latest trends in clothing. Whether you're looking for stylish tops, comfortable jeans, elegant dresses, or cozy sweaters, we've got you covered.
        </p>
        <p className={styles.aboutText}>
          Our mission is to make fashion accessible to everyone by offering high-quality, affordable clothing that suits every style and occasion. We believe that everyone deserves to look and feel their best, no matter their budget.
        </p>
        <p className={styles.aboutText}>
          With a wide range of sizes, styles, and colors to choose from, we're confident that you'll find something you love at our store. Shop with us today and elevate your wardrobe with our trendy and affordable clothing!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
