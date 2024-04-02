import React from 'react';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageBanner}>
        <h2 className={styles.homepageHeading}>Welcome to our Clothing E-commerce Store!</h2>
        <p className={styles.homepageSubheading}>Discover the latest fashion trends and elevate your style.</p>
      </div>
      <div className={styles.homepageSection}>
        <div className={styles.homepageSectionLeft}>
          <h3 className={styles.homepageSectionHeading}>Shop Men's Collection</h3>
          <img src="../../public/images/jeans.jpg" style={{ height: "400px" }} alt="Jeans" className={styles.homepageImage} />
          <p>Find the perfect fit with our wide range of jeans for men.</p>
          <button className={styles.homepageButton}>Explore Men's Collection</button>
        </div>
        <div className={styles.homepageSectionRight}>
          <h3 className={styles.homepageSectionHeading}>Shop Women's Collection</h3>
          <img src="/images/dress.jpg" style={{ height: "400px" }} alt="Dresses" className={styles.homepageImage} />
          <p>Discover elegant dresses for every occasion in our women's collection.</p>
          <button className={styles.homepageButton}>Explore Women's Collection</button>
        </div>
      </div>
      <div className={styles.homepageSection}>
        <div className={styles.homepageSectionLeft}>
          <h3 className={styles.homepageSectionHeading}>New Arrivals</h3>
          <img src="/images/tshirt.jpg" style={{ height: "400px" }} alt="Shirts" className={styles.homepageImage} />
          <p>Check out our latest arrivals and stay ahead of the fashion curve.</p>
          <button className={styles.homepageButton}>Shop New Arrivals</button>
        </div>
        <div className={styles.homepageSectionRight}>
          <h3 className={styles.homepageSectionHeading}>Sale</h3>
          <img src="/images/jeans.jpg" style={{ height: "400px" }} alt="Jeans" className={styles.homepageImage} />
          <p>Don't miss out on our sale items! Limited time offers on selected items.</p>
          <button className={styles.homepageButton}>Shop Sale</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
